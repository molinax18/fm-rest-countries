import type { Dispatch, SetStateAction } from "react";

interface BackgroundTheme {
  fill: string;
  semi: string;
}

export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
  backgroundTheme: BackgroundTheme;
  toggleTheme: Dispatch<SetStateAction<Theme>>;
}
