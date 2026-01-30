import { createContext, useContext, useState, type ReactNode } from "react";
import type { CountriesState } from "@/types/countriesContext";
import type { Country } from "@/types/country";
import Fuse from "fuse.js";
import data from "../../data.json";

const countries = data as Country[];
const CountriesContext = createContext<CountriesState | null>(null);

export function CountriesProvider({ children }: { children: ReactNode }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const fuse = new Fuse(countries, {
    keys: ["name"],
    threshold: 0.3,
  });
  function filterByCountryName(value: string) {
    if (!value) {
      setFilteredCountries(countries);
      return;
    }

    const results = fuse.search(value);
    setFilteredCountries(results.map((result) => result.item));
  }

  return (
    <CountriesContext.Provider
      value={{
        filterByCountryName,
        filteredCountries,
        setFilteredCountries,
      }}
    >
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
