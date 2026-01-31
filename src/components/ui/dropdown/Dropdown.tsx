import { useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { DropdownContext } from "../../../contexts/DropdownContext";
import useDropdown from "@/hooks/useDropdown";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export default function Dropdown({ className, children, ...props }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleOpen } = useDropdown(dropdownRef);

  return (
    <DropdownContext.Provider value={{ isOpen, toggleOpen }}>
      <div
        {...props}
        ref={dropdownRef}
        className={`relative ${className ?? ""}`}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}
