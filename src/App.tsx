import { useThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Views from "./components/Views";

function App() {
  const { backgroundTheme } = useThemeContext();

  return (
    <div className={`min-w-vw min-h-dvh ${backgroundTheme.fill}`}>
      <div className={`grid grid-rows-[max_content, 1fr]`}>
        <Header />
        <Views />
      </div>
    </div>
  );
}

export default App;
