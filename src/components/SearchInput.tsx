import type { ChangeEvent } from "react";
import { useCountriesContext } from "@/contexts/CountriesContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { BsSearch } from "react-icons/bs";

interface Props {
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ placeholder, value, onChange }: Props) {
  const { filterByCountryName } = useCountriesContext();
  const { backgroundTheme } = useThemeContext();

  return (
    <label
      htmlFor="search"
      className={`flex items-center gap-x-8 input-base ${backgroundTheme.semi}`}
    >
      <BsSearch />
      <input
        id="search"
        type="text"
        className="grow outline-none placeholder:text-inherit"
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChange(event);
          filterByCountryName(value);
        }}
      />
    </label>
  );
}
