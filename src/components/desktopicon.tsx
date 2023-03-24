import { useContext } from "react";
import { WindowContext, WindowContextType } from "../context/context";
import styles from '@/styles/desktopicon.module.css'

export default function DesktopIcon(prop: any) {
  const { windows, setWindows } = useContext(WindowContext) as WindowContextType;

  const openWindow = () => {
    const newWindows = [...windows];
    newWindows.push('Window');
    setWindows(newWindows);
  }

  return (
    <div className={styles.icon} onClick={openWindow}>
      <img src={prop.src} alt=""/>
      <span>{prop.name}</span>
    </div>
  )
}
