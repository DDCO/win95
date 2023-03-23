import styles from '@/styles/systemtray.module.css'

export default function SystemTray() {
  return (
    <div className={styles.systemTray}>
      <div className={styles.clock}>3:33 PM</div>
    </div>
  )
}
