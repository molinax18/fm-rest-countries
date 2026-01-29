import { useThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import CountriesFilterSection from "./components/CountriesFilterSection";
import CountryList from "./components/CountryList";
import { CountriesProvider } from "./contexts/CountriesContext";

function App() {
  const { backgroundTheme } = useThemeContext();

  return (
    <div className={`min-w-vw min-h-vh ${backgroundTheme.fill}`}>
      <div className={`grid grid-rows-[max_content, max_content, 1fr]`}>
        <Header />
        <CountriesProvider>
          <CountriesFilterSection />
          <CountryList />
        </CountriesProvider>
      </div>
    </div>
  );
}

export default App;
