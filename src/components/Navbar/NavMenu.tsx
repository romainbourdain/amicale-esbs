"use client";

import { NavbarMenu } from "@/types/Navbar";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import LanguageToggle from "../Language/LanguageToggle";
import ThemeToggle from "../theme/ThemeToggle";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LoginButton from "./LoginButton";

const NavMenu = ({ content }: { content: NavbarMenu }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1">
          <Menu size={25} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {content.map((item, index) => (
          <Fragment key={index}>
            {item.type === "separator" ? (
              <DropdownMenuSeparator />
            ) : (
              <DropdownMenuItem asChild>
                <Link href={item.href} className="flex items-center gap-2">
                  {item.icon} {item.name}
                </Link>
              </DropdownMenuItem>
            )}
          </Fragment>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <div className="flex justify-evenly items-center">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <div className="flex justify justify-center">
            <LoginButton />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
