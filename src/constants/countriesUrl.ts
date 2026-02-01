export const allCountryFields = [
  "name",
  "flags",
  "population",
  "region",
  "capital",
  "cca3",
  "currencies",
  "languages",
  "borders",
  "tld",
].join(",");

const baseUrl = "https://restcountries.com/v3.1/";
export const countriesUrl = `${baseUrl}all?fields=${allCountryFields}`;
