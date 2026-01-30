import type { Dispatch, SetStateAction } from "react";
import type { Country } from "./country";

export interface CountriesState {
  filteredCountries: Country[];
  setFilteredCountries: Dispatch<SetStateAction<Country[]>>;
  filterByCountryName: (value: string) => void;
  filterByRegion: (region: string) => void;
}
