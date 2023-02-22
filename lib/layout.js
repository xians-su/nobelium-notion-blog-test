import { useContext, createContext, useState } from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [layout, setLayout] = useState({
    scrollTopRef: null,
    scrollBottomRef: null,
  });
  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayout = () => useContext(LayoutContext);
