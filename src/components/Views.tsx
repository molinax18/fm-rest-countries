import { useEffect } from "react";
import { useCountriesContext } from "@/contexts/CountriesContext";
import { useNavigationContext } from "@/contexts/NavigationContext";
import AllCountriesSection from "@/sections/AllCountriesSection";
import CountryDetailsSection from "@/sections/CountryDetailsSection";

export default function Views() {
  const { view } = useNavigationContext();
  const { reset } = useCountriesContext();

  useEffect(() => {
    if (view.type === "home") reset();
  }, [view.type, reset]);

  switch (view.type) {
    case "home":
      return <AllCountriesSection />;

    case "details":
      return <CountryDetailsSection cca3={view.cca3} />;
  }
}
