import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationProvider } from "./contexts/NavigationContext.tsx";
import { CountriesProvider } from "./contexts/CountriesContext.tsx";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationProvider>
          <CountriesProvider>
            <App />
          </CountriesProvider>
        </NavigationProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
