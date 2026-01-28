import { createContext, useContext, useState, type ReactNode } from "react";
import type { Theme, ThemeState } from "@/types/themeContext";

const initialThemeValue = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

const ThemeContext = createContext<ThemeState | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialThemeValue);

  const backgroundTheme = {
    fill: theme === "light" ? "bg-light" : "bg-dark",
    semi: theme === "light" ? "bg-semi-light" : "bg-semi-dark",
  };

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, backgroundTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  const themeContext = useContext(ThemeContext) as ThemeState;

  if (!themeContext)
    throw new Error("Theme components must be used within <ThemeProvider />");

  return themeContext;
}
