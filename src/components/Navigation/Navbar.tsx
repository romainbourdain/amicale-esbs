import LanguageMenu from "@/components/LanguageMenu";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = async () => {
  return (
    <nav className="border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray">
      <div className="container flex items-center py-2 m-auto gap-1 justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo-amicale" width={50} height={50} />
          <h2 className="text-2xl font-bold">Amicale ESBS</h2>
        </div>
        <div className="flex gap-2 items-center">
          <LanguageMenu />
          <ThemeToggle />
          <Button variant="default">Se connecter</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
