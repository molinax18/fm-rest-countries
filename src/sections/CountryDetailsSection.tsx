import CountryInfo from "@/components/CountryInfo";
import { useCountriesContext } from "@/contexts/CountriesContext";
import { useNavigationContext } from "@/contexts/NavigationContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { BsArrowLeft } from "react-icons/bs";

export default function CountryDetailsSection({
  alphaCode,
}: {
  alphaCode: string;
}) {
  const { getCountryByAlphaCode } = useCountriesContext();
  const { navigateToHome } = useNavigationContext();
  const { backgroundTheme } = useThemeContext();
  const country = getCountryByAlphaCode(alphaCode);

  return (
    <div className="container flex flex-col gap-y-16">
      <nav>
        <button
          onClick={() => navigateToHome()}
          className={`interactive-shape flex items-center gap-x-3 cursor-pointer ${backgroundTheme.semi}`}
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
