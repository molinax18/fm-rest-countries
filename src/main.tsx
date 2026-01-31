import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { NavigationProvider } from "./contexts/NavigationContext.tsx";
import { CountriesProvider } from "./contexts/CountriesContext.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </NavigationProvider>
    </ThemeProvider>
  </StrictMode>,
);
