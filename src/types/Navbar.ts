import { ReactNode } from "react";

export type NavbarItem = {
  name: string;
  type: "link" | "dropdown";
  href?: string;
  content?: NavbarLink[];
};

export type NavbarLink = {
  name: string;
  href: string;
  type: "link";
  icon?: ReactNode;
};

export type NavbarMenu = (NavbarLink | { type: "separator" })[];
