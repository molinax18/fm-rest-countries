import { useThemeContext } from "./contexts/ThemeContext";
import { useCountriesContext } from "./contexts/CountriesContext";
import { useNavigationContext } from "./contexts/NavigationContext";
import Header from "./components/Header";
import CountryDetailsSection from "./sections/CountryDetailsSection";
import AllCountriesSection from "./sections/AllCountriesSection";

function App() {
  const { view } = useNavigationContext();
  const { backgroundTheme } = useThemeContext();
  const { reset } = useCountriesContext();

  function handleViews() {
    switch (view.type) {
      case "home":
        reset();
        return <AllCountriesSection />;

      case "details":
        return <CountryDetailsSection alphaCode={view.alphaCode} />;
    }
  }

  return (
    <div className={`min-w-vw min-h-dvh ${backgroundTheme.fill}`}>
      <div className={`grid grid-rows-[max_content, 1fr]`}>
        <Header />
        {handleViews()}
      </div>
    </div>
  );
}

export default App;
