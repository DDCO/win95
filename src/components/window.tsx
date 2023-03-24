import { WindowContext, WindowContextType } from '@/context/context';
import styles from '@/styles/window.module.css'
import { useContext, useState } from 'react'

export default function Window() {
  const { windows, setWindows } = useContext(WindowContext) as WindowContextType;
  const [x, setX] = useState(100);
  const [y, setY] = useState(200);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [mode, setMode] = useState('normal');

  const mouseDown = (event: any) => {
    setMode('dragging');
    setStartX(event.clientX - x);
    setStartY(event.clientY - y);
  }

  const mouseUp = (event: any) => {
    setMode('normal');
    setStartX(0);
    setStartY(0);
  }

  const mouseMove = (event: any) => {
    if (mode === 'dragging') {
      setX(event.clientX - startX);
      setY(event.clientY - startY);
    }
  }

  const close = () => {
    const newWindows = [...windows];
    newWindows.pop();
    setWindows(newWindows);
  }

  return (
    <div className={styles.window} style={{left: x, top: y}}>
      <div className={styles.titlebar} onMouseDown={(event) => mouseDown(event)} onMouseUp={(event) => mouseUp(event)} onMouseMove={(event) => mouseMove(event)}>
        <div className={styles.title}>Untitled - Notepad</div>
        <div className={styles.action}>
          <button type='button'>_</button>
          <button type='button'>&#9633;</button>
          <button type='button' onClick={close}>X</button>
        </div>
      </div>
      <div className={styles.toolbar}>
        <ul>
          <li>File</li>
          <li>Edit</li>
          <li>Search</li>
          <li>Help</li>
        </ul>
      </div>
      <div className={styles.content}></div>
    </div>
  )
}
