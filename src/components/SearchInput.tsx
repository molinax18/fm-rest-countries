import type { ChangeEvent } from "react";
import { useThemeContext } from "@/contexts/ThemeContext";
import { BsSearch } from "react-icons/bs";

interface Props {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ placeholder, onChange }: Props) {
  const { backgroundTheme } = useThemeContext();

  return (
    <label
      className={`flex items-center gap-x-8 interactive-shape ${backgroundTheme.semi}`}
    >
      <BsSearch />
      <input
        id="search"
        type="text"
        className="grow outline-none placeholder:text-inherit"
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}
