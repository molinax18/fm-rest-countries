import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useDropdownContext } from "../../../contexts/DropdownContext";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export default function DropdownMenu({ className, children, ...props }: Props) {
  const { isOpen } = useDropdownContext();

  return (
    isOpen && (
      <div
        {...props}
        className={`absolute left-0 mt-3 w-full ${className ?? ""}`}
      >
        {children}
      </div>
    )
  );
}
