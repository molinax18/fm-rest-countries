import type { NavigationState, View } from "@/types/navigationContext";
import { createContext, useContext, useState, type ReactNode } from "react";

const NavigationContext = createContext<NavigationState | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>({ type: "home" });

  function navigateToHome() {
    setView({ type: "home" });
  }

  function navigateToDetails(alphaCode: string) {
    setView({ type: "details", alphaCode });
  }

  return (
    <NavigationContext value={{ view, navigateToHome, navigateToDetails }}>
      {children}
    </NavigationContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNavigationContext() {
  const navigationContext = useContext(NavigationContext) as NavigationState;

  if (!navigationContext)
    throw new Error(
      "Navigation components must be used within <NavigationProvider />",
    );

  return navigationContext;
}
