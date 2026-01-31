import type { ReactNode } from "react";
import { useThemeContext } from "@/contexts/ThemeContext";
import Dropdown from "./ui/dropdown/Dropdown";
import DropdownTrigger from "./ui/dropdown/DropdownTrigger";
import DropdownMenu from "./ui/dropdown/DropdownMenu";
import FilterOptions from "./FilterOptions";

interface Props {
  className?: string;
  onChange: (value: string) => void;
  label: ReactNode;
  options: Array<string>;
}

export default function SelectFilter({
  className,
  onChange,
  label,
  options,
}: Props) {
  const { backgroundTheme } = useThemeContext();

  return (
    <Dropdown
      className={`rounded-md ${backgroundTheme.semi} ${className ?? ""}`}
    >
      <DropdownTrigger
        type="button"
        aria-haspopup="listbox"
        aria-controls="region-listbox"
        className="flex items-center justify-between gap-x-4 interactive-shape cursor-pointer tr-opacity"
      >
        {label}
      </DropdownTrigger>
      <DropdownMenu>
        <FilterOptions options={options} onChange={onChange} />
      </DropdownMenu>
    </Dropdown>
  );
}
