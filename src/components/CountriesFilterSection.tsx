import { useState, type ChangeEvent } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import SearchInput from "./SearchInput";
import SelectFilter from "./SelectFilter";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function CountriesFilterSection() {
  const [search, setSearch] = useState("");
  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <section className="flex flex-col gap-y-6 sm:flex-row sm:justify-between container">
      <SearchInput
        onChange={handleSearch}
        value={search}
        placeholder="Search for a country..."
      />

      <SelectFilter
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
