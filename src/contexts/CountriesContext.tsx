import type { CountriesState } from "@/types/countriesContext";
import type { CountryResponse } from "@/types/country";
import { createContext, useContext, useState, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@/services/countriesApi";
import { regions } from "@/constants/region";
import Fuse from "fuse.js";
import data from "../../data.json";

const countries: CountryResponse[] = data;
const CountriesContext = createContext<CountriesState | null>(null);

export function CountriesProvider({ children }: { children: ReactNode }) {
  const { data } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
    initialData: countries,
  });
  const [filteredCountries, setFilteredCountries] = useState(data);
  const fuse = new Fuse(data, {
    keys: [
      "name.common",
      "name.official",
      "cca3",
      "name.nativeName.spa.common",
      "name.nativeName.fra.common",
    ],
    threshold: 0.3,
  });

  function filterByCountryName(value: string) {
    if (!value) {
      setFilteredCountries(data);
      return;
    }

    const results = fuse.search(value);
    setFilteredCountries(results.map((result) => result.item));
  }

  function filterByRegion(region: string) {
    if (!regions.includes(region)) return;

    const newCountries = data.filter((c) => c.region === region);
    setFilteredCountries(newCountries);
  }

  function getCountryByCode(cca3: string) {
    return data.find((c) => c.cca3 === cca3) ?? null;
  }

  function getCountryNameByCode(cca3: string) {
    const country = data.find((c) => c.cca3 === cca3);
    return country ? country.name.common : cca3;
  }

  function reset() {
    setFilteredCountries(data);
  }

  return (
    <CountriesContext.Provider
      value={{
        filterByCountryName,
        filteredCountries,
        setFilteredCountries,
        filterByRegion,
        getCountryByCode,
        getCountryNameByCode,
        reset,
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
