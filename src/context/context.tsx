import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface WindowContextType {
  windows: string[];
  setWindows: Dispatch<SetStateAction<string[]>>;
}

export const WindowContext = createContext<WindowContextType | null>(null);

export default function Context(prop: any) {
  const [windows, setWindows] = useState([""]);

  return (
    <WindowContext.Provider value={{ windows, setWindows }}>
      {prop.children}
    </WindowContext.Provider>
  )
}
