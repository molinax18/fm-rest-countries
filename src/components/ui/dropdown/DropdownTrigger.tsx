import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useDropdownContext } from "../../../contexts/DropdownContext";

interface Props extends Omit<ComponentPropsWithoutRef<"button">, "onClick"> {
  children: ReactNode;
}

export default function DropdownTrigger({ ...props }: Props) {
  const { toggleOpen } = useDropdownContext();

  return (
    <button {...props} onClick={toggleOpen}>
      {props.children}
    </button>
  );
}
