import type { CountryResponse } from "@/types/country";
import { useCountriesContext } from "@/contexts/CountriesContext";
import { useNavigationContext } from "@/contexts/NavigationContext";
import { useThemeContext } from "@/contexts/ThemeContext";

export default function CountryInfo({
  flags,
  name,
  tld,
  population,
  currencies,
  region,
  languages,
  subregion,
  capital,
  borders,
}: CountryResponse) {
  const { backgroundTheme } = useThemeContext();
  const { getCountryNameByCode } = useCountriesContext();
  const { navigateToDetails } = useNavigationContext();

  return (
    <section className="flex flex-col gap-10 lg:flex-row lg:justify-center">
      <img
        src={flags.svg}
        alt={flags.alt}
        className="self-start flex-1 object-contain max-h-72 lg:max-w-2xl xl:max-h-96"
      />
      <article className="flex-1 flex flex-col gap-y-6 lg:justify-center">
        <h1 className="text-3xl font-bold">{name.common}</h1>
        <ul className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-y-2 [&_span]:font-semibold">
            <li>
              <span>Native name</span>: {name.nativeName.eng?.common}
            </li>
            <li>
              <span>Population</span>: {population.toLocaleString("en-US")}
            </li>
            <li>
              <span>Region</span>: {region}
            </li>
            <li>
              <span>Sub Region</span>: {subregion}
            </li>
            <li>
              <span>Capital</span>: {capital ?? "None"}
            </li>
          </div>

          <div className="flex flex-col gap-y-2 [&_span]:font-semibold">
            <li>
              <span>Top Level Domain</span>: {tld}
            </li>
            <li>
              <span>Currencies</span>:{" "}
              {currencies
                ? Object.values(currencies)
                    .map((c) => c.name)
                    .join(", ")
                : "None"}
            </li>
            <li>
              <span>Languages</span>:{" "}
              {languages ? Object.values(languages).join(", ") : "None"}
            </li>
          </div>
        </ul>
        {borders && borders.length > 0 && (
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center">
            <h3 className="font-bold whitespace-nowrap">Border Countries:</h3>
            <div className="flex flex-wrap gap-3">
              {borders?.map((b) => (
                <button
                  key={b}
                  onClick={() => navigateToDetails(b)}
                  className={`interactive-shape cursor-pointer tr-opacity ${backgroundTheme.semi}`}
                >
                  {getCountryNameByCode(b)}
                </button>
              ))}
            </div>
          </div>
        )}
      </article>
    </section>
  );
}
