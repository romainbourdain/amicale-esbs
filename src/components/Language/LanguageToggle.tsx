"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const splitedPathname = pathname.split("/");
  const lang = splitedPathname[1];
  splitedPathname[1] = lang === "fr" ? "en" : "fr";
  const newPathName = splitedPathname.join("/");

  return (
    <Button
      variant="ghost"
      onClick={() => router.push(newPathName, { scroll: false })}
    >
      {lang.toUpperCase()}
    </Button>
  );
};

export default LanguageToggle;
