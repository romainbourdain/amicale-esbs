"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type LanguageType = {
  language: "fr" | "en";
  setLanguage: Dispatch<SetStateAction<"fr" | "en">>;
};

const LanguageContext = createContext<LanguageType>({} as LanguageType);

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
