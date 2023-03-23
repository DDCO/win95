import Head from 'next/head'
import TaskBar from '../components/taskbar'
import DesktopIcon from '../components/desktopicon'

export default function Home() {
  return (
    <>
      <Head>
        <title>Windows 95</title>
        <meta name="description" content="A Windows 95 like experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DesktopIcon name="My Computer" src="/images/computer.png"/>
        <DesktopIcon name="Recycle Bin" src="/images/bin.png"/>
        <TaskBar/>
      </main>
    </>
  )
}
