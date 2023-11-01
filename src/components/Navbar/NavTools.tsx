import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageToggle from "../Language/LanguageToggle";
import LoginButton from "./LoginButton";

const NavTools = () => {
  return (
    <div className="flex gap-2 items-center">
      <LanguageToggle />
      <ThemeToggle />
      <LoginButton />
    </div>
  );
};

export default NavTools;
