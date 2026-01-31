import CountriesFilter from "@/components/CountriesFilter";
import CountryList from "@/components/CountryList";

export default function AllCountriesSection() {
  return (
    <div className="flex flex-col gap-y-12 container">
      <CountriesFilter />
      <CountryList />
    </div>
  );
}
