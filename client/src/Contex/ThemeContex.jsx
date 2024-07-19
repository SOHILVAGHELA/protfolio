import { useState, createContext, Children, useContext } from "react";
const ThemeContex = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContex.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContex.Provider>
  );
};
// custom hook
const useTheme = () => useContext(ThemeContex);
export { useTheme, ThemeProvider };
