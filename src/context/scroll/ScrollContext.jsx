// ScrollContext.js
import { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(null);

  return (
    <ScrollContext.Provider value={{ scrollY, setScrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};
