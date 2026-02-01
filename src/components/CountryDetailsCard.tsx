import type { CountryResponse } from "@/types/country";
import { useNavigationContext } from "@/contexts/NavigationContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useCountriesContext } from "@/contexts/CountriesContext";

export default function CountryDetailsCard({
  flags,
  name,
  population,
  region,
  capital,
  cca3,
}: CountryResponse) {
  const { isLoading } = useCountriesContext();
  const { navigateToDetails } = useNavigationContext();
  const { backgroundTheme } = useThemeContext();

  return (
    <article
      className={`flex flex-col rounded-md overflow-hidden cursor-pointer tr-opacity shadow-lg ${backgroundTheme.semi}`}
      onClick={() => {
        if (!isLoading) navigateToDetails(cca3);
      }}
    >
      <header className="flex-1">
        <img
          src={flags.svg}
          alt={flags.alt}
          className="object-cover h-48 w-full"
        />
      </header>
      <section className="flex flex-col gap-y-3 py-8 px-4">
        <h2 className="font-bold text-xl">{name.common}</h2>
        <ul>
          <li>
            <span className="font-semibold">Population:</span>{" "}
            {population.toLocaleString("en-US")}
          </li>
          <li>
            <span className="font-semibold">Region:</span> {region}
          </li>
          <li>
            <span className="font-semibold">Capital:</span> {capital}
          </li>
        </ul>
      </section>
    </article>
  );
}
