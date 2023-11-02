import text from "@/constants/text";
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

export const getNavbarLinks = (
  lang: "fr" | "en"
): { [key: string]: NavbarLink } => {
  const navbarText = text[lang].navbar;
  return {
    home: {
      name: navbarText.links.home,
      href: `/${lang}`,
      type: "link",
      icon: <Home />,
    },
    association: {
      name: navbarText.links.association,
      href: `/${lang}/association`,
      type: "link",
      icon: <Users />,
    },
    esbs: {
      name: navbarText.links.esbs,
      href: `/${lang}/school/esbs`,
      type: "link",
      icon: <Pipette />,
    },
    chembiotech: {
      name: navbarText.links.chembiotech,
      href: `/${lang}/school/chembiotech`,
      type: "link",
      icon: <FlaskConical />,
    },
    admissions: {
      name: navbarText.links.admissions,
      href: `/${lang}/school/admissions`,
      type: "link",
      icon: <UserPlus />,
    },
    integration: {
      name: navbarText.links.integration,
      href: `/${lang}/student-life/integration`,
      type: "link",
      icon: <Tent />,
    },
    parties: {
      name: navbarText.links.parties,
      href: `/${lang}/student-life/parties`,
      type: "link",
      icon: <PartyPopper />,
    },
    accommodation: {
      name: navbarText.links.accommodation,
      href: `/${lang}/student-life/accommodation`,
      type: "link",
      icon: <Building />,
    },
    strasbourg: {
      name: navbarText.links.strasbourg,
      href: `/${lang}/student-life/strasbourg`,
      type: "link",
      icon: <Beer />,
    },
    sports: {
      name: navbarText.links.sports,
      href: `/${lang}/student-life/sports`,
      type: "link",
      icon: <DumbbellIcon />,
    },
  };
};

export const getNavbarItems = (lang: "fr" | "en"): NavbarItem[] => {
  const navbarText = text[lang].navbar;
  const navbarLinks = getNavbarLinks(lang);
  return [
    {
      ...navbarLinks.association,
      type: "link",
    },
    {
      name: navbarText.links.school,
      type: "dropdown",
      content: [
        { ...navbarLinks.esbs },
        { ...navbarLinks.chembiotech },
        { ...navbarLinks.admissions },
      ],
    },
    {
      name: navbarText.links.studentLife,
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
  lang: "fr" | "en"
): (NavbarLink | { type: "separator" })[] => {
  const navbarLinks = getNavbarLinks(lang);
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
