interface BackgroundTheme {
  fill: string;
  semi: string;
}

export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
  backgroundTheme: BackgroundTheme;
  toggleTheme: () => void;
}
