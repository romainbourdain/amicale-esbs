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
import text from "@/constants/text";

export const getNavbarLinks = (
  language: "fr" | "en"
): { [key: string]: NavbarLink } => ({
  home: {
    name: text[language].navbar.links.home,
    href: "/",
    type: "link",
    icon: <Home />,
  },
  association: {
    name: text[language].navbar.links.association,
    href: "/association",
    type: "link",
    icon: <Users />,
  },
  esbs: {
    name: text[language].navbar.links.esbs,
    href: "/school/esbs",
    type: "link",
    icon: <Pipette />,
  },
  chembiotech: {
    name: text[language].navbar.links.chembiotech,
    href: "/school/chembiotech",
    type: "link",
    icon: <FlaskConical />,
  },
  admissions: {
    name: text[language].navbar.links.admissions,
    href: "/school/admissions",
    type: "link",
    icon: <UserPlus />,
  },
  integration: {
    name: text[language].navbar.links.integration,
    href: "/student-life/integration",
    type: "link",
    icon: <Tent />,
  },
  parties: {
    name: text[language].navbar.links.parties,
    href: "/student-life/parties",
    type: "link",
    icon: <PartyPopper />,
  },
  accommodation: {
    name: text[language].navbar.links.accommodation,
    href: "/student-life/accommodation",
    type: "link",
    icon: <Building />,
  },
  strasbourg: {
    name: text[language].navbar.links.strasbourg,
    href: "/student-life/strasbourg",
    type: "link",
    icon: <Beer />,
  },
  sports: {
    name: text[language].navbar.links.sports,
    href: "/student-life/sports",
    type: "link",
    icon: <DumbbellIcon />,
  },
});

export const getNavbarItems = (language: "fr" | "en"): NavbarItem[] => {
  const navbarLinks = getNavbarLinks(language);
  return [
    {
      ...navbarLinks.association,
      type: "link",
    },
    {
      name: text[language].navbar.links.school,
      type: "dropdown",
      content: [
        { ...navbarLinks.esbs },
        { ...navbarLinks.chembiotech },
        { ...navbarLinks.admissions },
      ],
    },
    {
      name: text[language].navbar.links.studentLife,
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
};

export const getNavbarMenu = (
  language: "fr" | "en"
): (NavbarLink | { type: "separator" })[] => {
  const navbarLinks = getNavbarLinks(language);
  return [
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
};
