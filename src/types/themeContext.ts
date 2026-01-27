import type { Dispatch, SetStateAction } from "react";

export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
  toggleTheme: Dispatch<SetStateAction<Theme>>;
}
