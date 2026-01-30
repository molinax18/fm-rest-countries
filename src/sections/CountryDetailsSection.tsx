import { useNavigationContext } from "@/contexts/NavigationContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { BsArrowLeft } from "react-icons/bs";

export default function CountryDetailsSection() {
  const { navigateTo } = useNavigationContext();
  const { backgroundTheme } = useThemeContext();

  return (
    <div className="container flex flex-col gap-y-6">
      <nav>
        <button
          onClick={() => navigateTo("home")}
          className={`interactive-shape flex items-center gap-x-3 cursor-pointer ${backgroundTheme.semi}`}
        >
          <BsArrowLeft />
          Back
        </button>
      </nav>
      Country details
    </div>
  );
}
