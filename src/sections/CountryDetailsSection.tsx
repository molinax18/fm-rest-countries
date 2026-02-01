import { useCountriesContext } from "@/contexts/CountriesContext";
import { useNavigationContext } from "@/contexts/NavigationContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { BsArrowLeft } from "react-icons/bs";
import CountryInfo from "@/components/CountryInfo";

export default function CountryDetailsSection({ cca3 }: { cca3: string }) {
  const { getCountryByCode } = useCountriesContext();
  const { navigateToHome } = useNavigationContext();
  const { backgroundTheme } = useThemeContext();
  const country = getCountryByCode(cca3);

  return (
    <div className="container flex flex-col gap-y-16">
      <nav>
        <button
          onClick={() => navigateToHome()}
          className={`interactive-shape flex items-center gap-x-3 cursor-pointer tr-opacity ${backgroundTheme.semi}`}
        >
          <BsArrowLeft />
          Back
        </button>
      </nav>
      {!country ? (
        <span>"Country not found"</span>
      ) : (
        <CountryInfo {...country} />
      )}
    </div>
  );
}
