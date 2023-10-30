import LanguageMenu from "@/components/LanguageMenu";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import NavDropdown from "./NavDropdown";

const Navbar = async () => {
  return (
    <nav className="border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray">
      <div className="container flex items-center py-2 m-auto gap-1 justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo-amicale" width={50} height={50} />
            <h2 className="text-2xl font-bold">Amicale ESBS</h2>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/association"
              className={buttonVariants({ variant: "ghost" })}
            >
              L'association
            </Link>
            <NavDropdown
              title="L'école"
              content={[
                { name: "L'ESBS", href: "/school/esbs" },
                { name: "ChemBioTech", href: "/school/chembiotech" },
              ]}
            />
            <NavDropdown
              title="Vie étudiante"
              content={[
                { name: "Intégration", href: "/student-life/integration" },
                { name: "Soirées", href: "/student-life/parties" },
                { name: "Logement", href: "/student-life/accommodation" },
                {
                  name: "Sortir à Strasbourg",
                  href: "/student-life/strasbourg",
                },
                { name: "Sport", href: "/student-life/sports" },
              ]}
            />
          </div>
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
