"use client";

import text from "@/constants/text";
import { useLanguage } from "./Language/LanguageProvider";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="w-full bg-subtle-gray py-5 flex flex-col">
      <div className="text-center text-xs sm:text-sm">
        {text[language].footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
