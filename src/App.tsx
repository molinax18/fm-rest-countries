import { useThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useThemeContext();
  const background = theme === "dark" ? "bg-dark" : "bg-semi-light";

  return (
    <div className={`min-w-dvh min-h-dvh grid grid-rows-3 ${background}`}>
      App
    </div>
  );
}

export default App;
