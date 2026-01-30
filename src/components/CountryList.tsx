import { useCountriesContext } from "@/contexts/CountriesContext";
import CountryDetails from "./CountryDetails";

interface Props {
  maxDisplay?: number;
}

export default function CountryList({ maxDisplay = 7 }: Props) {
  const { filteredCountries } = useCountriesContext();
  const countriesToDisplay = filteredCountries.slice(0, maxDisplay);

  return (
    <section className="container grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-8">
      {countriesToDisplay.map((c) => (
        <CountryDetails key={c.name} {...c} />
      ))}
    </section>
  );
}
