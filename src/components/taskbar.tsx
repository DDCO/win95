import StartButton from "./startbutton"
import SystemTray from "./systemtray"
import styles from '@/styles/taskbar.module.css'

export default function TaskBar() {
  return (
    <div className={styles.taskbar}>
      <StartButton/>
      <div className={styles.tasks}></div>
      <SystemTray/>
    </div>
  )
}
