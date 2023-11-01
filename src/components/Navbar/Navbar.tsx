import { NavbarItem, NavbarLink } from "@/types/Navbar";
import {
  Beer,
  Building,
  DumbbellIcon,
  FlaskConical,
  Home,
  PartyPopper,
  Pipette,
  Tent,
  UserPlus,
  Users,
} from "lucide-react";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavTools from "./NavTools";

const Navbar = async () => {
  return (
    <>
      <MiddleNavbar />
      <LargeNavbar />
      <SmallNavbar />
    </>
  );
};

const navbarLinks: { [key: string]: NavbarLink } = {
  home: { name: "Home", href: "/", type: "link", icon: <Home /> },
  association: {
    name: "L'association",
    href: "/association",
    type: "link",
    icon: <Users />,
  },
  esbs: {
    name: "L'ESBS",
    href: "/school/esbs",
    type: "link",
    icon: <Pipette />,
  },
  chembiotech: {
    name: "ChemBioTech",
    href: "/school/chembiotech",
    type: "link",
    icon: <FlaskConical />,
  },
  admissions: {
    name: "Admissions",
    href: "/school/admissions",
    type: "link",
    icon: <UserPlus />,
  },
  integration: {
    name: "Intégration",
    href: "/student-life/integration",
    type: "link",
    icon: <Tent />,
  },
  parties: {
    name: "Soirées",
    href: "/student-life/parties",
    type: "link",
    icon: <PartyPopper />,
  },
  accommodation: {
    name: "Logement",
    href: "/student-life/accommodation",
    type: "link",
    icon: <Building />,
  },
  strasbourg: {
    name: "Sortir à Strasbourg",
    href: "/student-life/strasbourg",
    type: "link",
    icon: <Beer />,
  },
  sports: {
    name: "Sport",
    href: "/student-life/sports",
    type: "link",
    icon: <DumbbellIcon />,
  },
};

const navbarItems: NavbarItem[] = [
  {
    ...navbarLinks.association,
    type: "link",
  },
  {
    name: "L'école",
    type: "dropdown",
    content: [
      { ...navbarLinks.esbs },
      { ...navbarLinks.chembiotech },
      { ...navbarLinks.admissions },
    ],
  },
  {
    name: "Vie étudiante",
    type: "dropdown",
    content: [
      { ...navbarLinks.integration },
      { ...navbarLinks.parties },
      { ...navbarLinks.accommodation },
      { ...navbarLinks.strasbourg },
      { ...navbarLinks.sports },
    ],
  },
];

const navbarMenu: (NavbarLink | { type: "separator" })[] = [
  { ...navbarLinks.home },
  { type: "separator" },
  { ...navbarLinks.association },
  { type: "separator" },
  { ...navbarLinks.esbs },
  { ...navbarLinks.chembiotech },
  { ...navbarLinks.admissions },
  { type: "separator" },
  { ...navbarLinks.integration },
  { ...navbarLinks.parties },
  { ...navbarLinks.accommodation },
  { ...navbarLinks.strasbourg },
  { ...navbarLinks.sports },
];

const LargeNavbar = () => {
  return (
    <nav className="border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray z-10 hidden lg:flex items-center justify-between py-2 px-5">
      <div className="flex items-center gap-5">
        <NavLogo />
        <NavLinks items={navbarItems} />
      </div>
      <NavTools />
    </nav>
  );
};

const MiddleNavbar = () => {
  return (
    <nav className="border-b border-b-fg-subtle-gray items-center fixed w-full bg-subtle-gray z-10 flex-col hidden sm:flex lg:hidden">
      <div className="w-full flex items-center py-4 justify-around">
        <NavLogo />
        <NavTools />
      </div>
      <div className="w-full flex justify-center py-4">
        <NavLinks items={navbarItems} />
      </div>
    </nav>
  );
};

const SmallNavbar = () => {
  return (
    <nav className="container border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray z-10 items-center py-4 m-auto justify-between flex sm:hidden">
      <NavLogo />
      <NavMenu content={navbarMenu} />
    </nav>
  );
};

export default Navbar;
