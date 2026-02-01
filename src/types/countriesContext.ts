import type { Dispatch, SetStateAction } from "react";
import type { CountryResponse } from "./country";

export interface CountriesState {
  filteredCountries: CountryResponse[];
  setFilteredCountries: Dispatch<SetStateAction<CountryResponse[]>>;
  filterByCountryName: (value: string) => void;
  filterByRegion: (region: string) => void;
  getCountryByCode: (cca3: string) => CountryResponse | null;
  getCountryNameByCode: (cca3: string) => string;
  reset: () => void;
}
