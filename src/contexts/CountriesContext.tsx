import { createContext, useContext, useState, type ReactNode } from "react";
import type { CountriesState } from "@/types/countriesContext";
import type { Country } from "@/types/country";
import initialCountriesValue from "../../data.json";

const CountriesContext = createContext<CountriesState | null>(null);

export function CountriesProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<Country[]>(
    initialCountriesValue as Country[],
  );

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCountriesContext() {
  const countriesContext = useContext(CountriesContext);

  if (!countriesContext)
    throw new Error(
      "Countries components must be used within <CountriesProvider />",
    );

  return countriesContext;
}
