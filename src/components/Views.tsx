import { useCountriesContext } from "@/contexts/CountriesContext";
import { useNavigationContext } from "@/contexts/NavigationContext";
import AllCountriesSection from "@/sections/AllCountriesSection";
import CountryDetailsSection from "@/sections/CountryDetailsSection";

export default function Views() {
  const { view } = useNavigationContext();
  const { reset } = useCountriesContext();

  switch (view.type) {
    case "home":
      reset();
      return <AllCountriesSection />;

    case "details":
      return <CountryDetailsSection alphaCode={view.alphaCode} />;
  }
}
