import type { Country } from "@/types/country";
import { useNavigationContext } from "@/contexts/NavigationContext";
import { useThemeContext } from "@/contexts/ThemeContext";

export default function CountryDetailsCard({
  flag,
  name,
  population,
  region,
  capital,
  alpha3Code,
}: Country) {
  const { navigateToDetails } = useNavigationContext();
  const { backgroundTheme } = useThemeContext();

  return (
    <article
      className={`flex flex-col rounded-md overflow-hidden cursor-pointer tr-opacity ${backgroundTheme.semi}`}
      onClick={() => navigateToDetails(alpha3Code)}
    >
      <header className="flex-1">
        <img
          src={flag}
          alt={`${name} flag`}
          className="object-cover h-48 w-full"
        />
      </header>
      <section className="flex flex-col gap-y-3 py-8 px-4">
        <h3 className="font-bold text-xl">{name}</h3>
        <ul>
          <li>
            <span className="font-semibold">Population:</span> {population}
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
