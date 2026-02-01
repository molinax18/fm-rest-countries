import { useThemeContext } from "@/contexts/ThemeContext";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const { theme, backgroundTheme, toggleTheme } = useThemeContext();

  return (
    <header
      className={`container flex items-center justify-between shadow-md ${backgroundTheme.semi}`}
    >
      <h1 className="font-bold">Where in the world?</h1>

      <ThemeButton
        theme={theme}
        onClick={toggleTheme}
        className="flex items-center gap-x-2 cursor-pointer tr-opacity"
      />
    </header>
  );
}
