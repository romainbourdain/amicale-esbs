"use client";

import { redirect, usePathname } from "next/navigation";
import { PropsWithChildren, createContext, useContext } from "react";

const LanguageContext = createContext<"fr" | "en">("fr");

export const useLanguage = () => {
  return useContext(LanguageContext);
};

const LanguageProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  if (lang !== "fr" && lang !== "en") {
    redirect("/fr");
  }

  return (
    <LanguageContext.Provider value={lang as "fr" | "en"}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
