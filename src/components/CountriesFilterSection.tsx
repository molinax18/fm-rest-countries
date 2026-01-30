import type { ChangeEvent } from "react";
import { useCountriesContext } from "@/contexts/CountriesContext";
import { BsArrowDownShort } from "react-icons/bs";
import { regions } from "@/constants/region";
import SearchInput from "./SearchInput";
import SelectFilter from "./SelectFilter";

export default function CountriesFilterSection() {
  const { filterByCountryName, filterByRegion } = useCountriesContext();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    filterByCountryName(event.target.value);
  }

  function handleRegion(region: string) {
    filterByRegion(region);
  }

  return (
    <section className="flex flex-col gap-y-6 sm:flex-row sm:justify-between container">
      <SearchInput
        onChange={handleSearch}
        placeholder="Search for a country..."
      />

      <SelectFilter
        onChange={handleRegion}
        className="w-max"
        options={regions}
        label={
          <>
            Filter by Region <BsArrowDownShort />
          </>
        }
      />
    </section>
  );
}
