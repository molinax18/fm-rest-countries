import { useState, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { useThemeContext } from "@/contexts/ThemeContext";

interface Props extends ComponentPropsWithoutRef<"div"> {
  label: ReactNode;
  options: Array<string>;
}

export default function SelectFilter({
  className,
  label,
  options,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { backgroundTheme } = useThemeContext();
  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div
      className={`relative rounded-md ${backgroundTheme.semi} ${className ?? ""}`}
      {...props}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="region-listbox"
        className="flex items-center justify-between gap-x-4 input-base cursor-pointer"
        onClick={toggleMenu}
      >
        {label}
      </button>

      {isOpen && (
        <ul
          id="region-listbox"
          role="listbox"
          className={`absolute left-0 flex flex-col gap-y-3 w-full mt-6 input-base ${backgroundTheme.semi}`}
        >
          {options.map((op, index) => (
            <li role="option" key={index} className="cursor-pointer">
              {op}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
