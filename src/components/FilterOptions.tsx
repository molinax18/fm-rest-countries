import { useThemeContext } from "@/contexts/ThemeContext";
import { useDropdownContext } from "../contexts/DropdownContext";

interface Props {
  options: Array<string>;
  onChange: (value: string) => void;
}

export default function FilterOptions({ options, onChange }: Props) {
  const { backgroundTheme } = useThemeContext();
  const { toggleOpen } = useDropdownContext();

  return (
    <ul
      className={`interactive-shape flex flex-col gap-y-3 ${backgroundTheme.semi}`}
    >
      {options.map((op, index) => (
        <li
          key={index}
          className="cursor-pointer tr-opacity"
          onClick={() => {
            onChange(op);
            toggleOpen();
          }}
        >
          {op}
        </li>
      ))}
    </ul>
  );
}
