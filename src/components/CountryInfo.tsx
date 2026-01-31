import type { Country } from "@/types/country";
import { useCountriesContext } from "@/contexts/CountriesContext";
import { useNavigationContext } from "@/contexts/NavigationContext";
import { useThemeContext } from "@/contexts/ThemeContext";

export default function CountryInfo({
  flag,
  name,
  nativeName,
  topLevelDomain,
  population,
  currencies,
  region,
  languages,
  subregion,
  capital,
  borders,
}: Country) {
  const { backgroundTheme } = useThemeContext();
  const { getCountryNameByAlphaCode } = useCountriesContext();
  const { navigateToDetails } = useNavigationContext();

  return (
    <section className="flex flex-col gap-10 lg:flex-row lg:justify-center">
      <img
        src={flag}
        alt={name}
        className="flex-2 object-contain max-h-72 lg:max-w-2xl"
      />
      <article className="flex-1 flex flex-col gap-y-4 lg:justify-center">
        <h1 className="text-3xl font-bold">{name}</h1>
        <ul className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-y-2 [&_span]:font-semibold">
            <li>
              <span>Native name</span>: {nativeName}
            </li>
            <li>
              <span>Population</span>: {population}
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
              <span>Top Level Domain</span>: {topLevelDomain}
            </li>
            <li>
              <span>Currencies</span>:{" "}
              {currencies?.map((c) => c.name).join(", ") ?? "None"}
            </li>
            <li>
              <span>Languages</span>:{" "}
              {languages?.map((lan) => lan.name).join(", ") ?? "None"}
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
                  {getCountryNameByAlphaCode(b)}
                </button>
              ))}
            </div>
          </div>
        )}
      </article>
    </section>
  );
}
