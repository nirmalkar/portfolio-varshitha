// ThemeProvider.tsx
import React, { createContext, useEffect, useState } from "react";
import { Theme, themes, ThemeName } from "../../theme";

type ThemeContextType = {
  theme: Theme;
  themeName: ThemeName;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.dark,
  themeName: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(
    getUserPreferredTheme()
  );
  const theme = themes[themeName];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && storedTheme in themes) {
      setThemeName(storedTheme as ThemeName);
    }
  }, []);

  function getUserPreferredTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "dark";
  }

  const toggleTheme = () => {
    const newThemeName = themeName === "light" ? "dark" : "light";
    setThemeName(newThemeName);
    localStorage.setItem("theme", newThemeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
