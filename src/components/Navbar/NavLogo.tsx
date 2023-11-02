"use client";

import text from "@/constants/text";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../Language/LanguageProvider";

const NavLogo = () => {
  const lang = useLanguage();
  const navbarText = text[lang].navbar;
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="logo-amicale" width={50} height={50} />
      <h2 className="sm:text-2xl text-xl font-bold whitespace-nowrap">
        {navbarText.title}
      </h2>
    </Link>
  );
};

export default NavLogo;
