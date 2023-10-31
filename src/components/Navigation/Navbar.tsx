import LanguageMenu from "@/components/Language/LanguageMenu";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import NavDropdown from "./NavDropdown";

const Navbar = async () => {
  return (
    <>
      <SmallNavbar />
      <LargeNavbar />
    </>
  );
};

type NavbarItem = {
  title: string;
  type: "link" | "dropdown";
  href?: string;
  content?: { name: string; href: string }[];
};

const navbarItems: NavbarItem[] = [
  {
    title: "L'association",
    href: "/association",
    type: "link",
  },
  {
    title: "L'école",
    type: "dropdown",
    content: [
      { name: "L'ESBS", href: "/school/esbs" },
      { name: "ChemBioTech", href: "/school/chembiotech" },
      { name: "Admissions", href: "/school/admissions" },
    ],
  },
  {
    title: "Vie étudiante",
    type: "dropdown",
    content: [
      { name: "Intégration", href: "/student-life/integration" },
      { name: "Soirées", href: "/student-life/parties" },
      { name: "Logement", href: "/student-life/accommodation" },
      { name: "Sortir à Strasbourg", href: "/student-life/strasbourg" },
      { name: "Sport", href: "/student-life/sports" },
    ],
  },
];

const LargeNavbar = () => {
  return (
    <nav className="border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray z-10 hidden lg:block">
      <div className="container flex items-center py-2 m-auto gap-1 justify-between">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo-amicale" width={50} height={50} />
            <h2 className="text-2xl font-bold">Amicale ESBS</h2>
          </Link>
          <div className="flex items-center gap-2">
            {navbarItems.map((item, id) => (
              <>
                {item.type === "link" ? (
                  <Link
                    href={item.href || ""}
                    key={id}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <NavDropdown
                    key={id}
                    title={item.title}
                    content={item.content || []}
                  />
                )}
              </>
            ))}
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

const SmallNavbar = () => {
  return (
    <nav className="border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray z-10 flex flex-col lg:hidden">
      <div className="container flex items-center py-2 m-auto gap-1 justify-between">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo-amicale" width={50} height={50} />
            <h2 className="text-2xl font-bold">Amicale ESBS</h2>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <LanguageMenu />
          <ThemeToggle />
          <Button variant="default">Se connecter</Button>
        </div>
      </div>
      <div className="container flex items-center py-2 m-auto justify-center gap-2">
        {navbarItems.map((item, id) => (
          <>
            {item.type === "link" ? (
              <Link
                href={item.href || ""}
                key={id}
                className={buttonVariants({ variant: "ghost" })}
              >
                {item.title}
              </Link>
            ) : (
              <NavDropdown
                key={id}
                title={item.title}
                content={item.content || []}
              />
            )}
          </>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
