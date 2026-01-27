import type { Dispatch, SetStateAction } from "react";
import type { Country } from "./country";

export interface CountriesState {
  countries: Country[];
  setCountries: Dispatch<SetStateAction<Country[]>>;
}
