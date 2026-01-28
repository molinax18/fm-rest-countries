import { useThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";

function App() {
  const { backgroundTheme } = useThemeContext();

  return (
    <div className={`min-w-dvw min-h-dvh ${backgroundTheme.fill}`}>
      <div className={`grid grid-rows-[max_content, max_content, 1fr]`}>
        <Header />
      </div>
    </div>
  );
}

export default App;
