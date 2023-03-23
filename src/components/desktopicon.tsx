import styles from '@/styles/desktopicon.module.css'
import Window from './window'

export default function DesktopIcon(prop: any) {
  const openWindow = function () {};

  return (
    <div className={styles.icon} onClick={openWindow}>
      <img src={prop.src} alt=""/>
      <span>{prop.name}</span>
    </div>
  )
}
