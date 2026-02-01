import { useCountriesContext } from "@/contexts/CountriesContext";
import CountryDetailsCard from "./CountryDetailsCard";

interface Props {
  maxDisplay?: number;
}

export default function CountryList({ maxDisplay = 7 }: Props) {
  const { filteredCountries } = useCountriesContext();
  const countriesToDisplay = filteredCountries.slice(0, maxDisplay);

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-8">
      {countriesToDisplay.length === 0 ? (
        <span>Countries not found.</span>
      ) : (
        countriesToDisplay.map((c) => (
          <CountryDetailsCard key={c.cca3} {...c} />
        ))
      )}
    </section>
  );
}
