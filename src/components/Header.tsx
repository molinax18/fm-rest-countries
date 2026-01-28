import { useThemeContext } from "@/contexts/ThemeContext";
import { capitalize } from "@/utils/capitalize";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Header() {
  const { theme, backgroundTheme } = useThemeContext();
  const themeIcon = theme === "light" ? <BsMoon /> : <BsSun />;

  return (
    <header
      className={`container flex items-center justify-between ${backgroundTheme.semi}`}
    >
      <h1>Where in the world?</h1>

      <button className="flex items-center gap-x-2">
        {themeIcon} {capitalize(theme === "light" ? "dark" : "light")} Mode
      </button>
    </header>
  );
}
