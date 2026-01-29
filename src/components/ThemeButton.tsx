import type { Theme } from "@/types/themeContext";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { capitalize } from "@/utils/capitalize";

interface Props extends ComponentPropsWithoutRef<"button"> {
  theme: Theme;
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export default function ThemeButton({ theme, ...props }: Props) {
  const themeIcon = theme === "light" ? <BsMoon /> : <BsSun />;

  return (
    <button type={props.type ?? "button"} {...props}>
      {themeIcon} {capitalize(theme === "light" ? "dark" : "light")} Mode
    </button>
  );
}
