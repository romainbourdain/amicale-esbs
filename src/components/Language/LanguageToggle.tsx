"use client";

import { Button } from "../ui/button";
import { useLanguage } from "./LanguageProvider";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };
  return (
    <Button onClick={toggleLanguage} variant="ghost">
      {language.toUpperCase()}
    </Button>
  );
};

export default LanguageToggle;
