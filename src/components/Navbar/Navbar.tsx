"use client";

import { useLanguage } from "../Language/LanguageProvider";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavTools from "./NavTools";
import { getNavbarItems, getNavbarMenu } from "./NavbarItems";

const Navbar = () => {
  return (
    <>
      <MiddleNavbar />
      <LargeNavbar />
      <SmallNavbar />
    </>
  );
};

const LargeNavbar = () => {
  const lang = useLanguage();
  const navbarItems = getNavbarItems(lang);
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
  const lang = useLanguage();
  const navbarItems = getNavbarItems(lang);
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
  const lang = useLanguage();
  const navbarMenu = getNavbarMenu(lang);
  return (
    <nav className="container border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray z-10 items-center py-4 m-auto justify-between flex sm:hidden">
      <NavLogo />
      <NavMenu content={navbarMenu} />
    </nav>
  );
};

export default Navbar;
