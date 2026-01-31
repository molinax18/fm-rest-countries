import { createContext, useContext } from "react";

interface DropdownState {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const DropdownContext = createContext<DropdownState | null>(null);

export function useDropdownContext() {
  const dropdownContext = useContext(DropdownContext);

  if (!dropdownContext)
    throw new Error(
      "Dropdown components must be used within <DropdownProvider />",
    );

  return dropdownContext;
}
