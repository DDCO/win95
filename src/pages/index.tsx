import Head from 'next/head'
import TaskBar from '../components/taskbar'
import DesktopIcon from '../components/desktopicon'
import Window from '@/components/window';
import { useContext, createElement, FunctionComponent } from "react";
import { WindowContext, WindowContextType } from "../context/context";

export default function Home() {
  const context = useContext(WindowContext);
  const windowToComponent: {[key: string]: FunctionComponent} = {
    '': Window,
    'Window': Window
  };

  let WindowComponents = null;
  
  if (context) {
    const { windows, setWindows } = context as WindowContextType;
    WindowComponents = windows.map((item, index) => {
      return createElement(windowToComponent[item], {
        key: index
      });
    });
  }

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
        {WindowComponents}
        <TaskBar/>
      </main>
    </>
  )
}
