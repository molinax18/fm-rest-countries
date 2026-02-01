import type { CountryResponse } from "@/types/country";
import { countriesUrl } from "@/constants/countriesUrl";

export async function getCountries() {
  const response = await fetch(countriesUrl);
  if (!response.ok) throw new Error("Error loading countries");

  const data: CountryResponse[] = await response.json();
  return data;
}
