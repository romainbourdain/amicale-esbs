"use client";

import { NavbarLink } from "@/types/Navbar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type NavDropdownProps = {
  title: string;
  content: NavbarLink[];
};

const NavDropdown = ({ title, content }: NavDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1">
          {title} <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {content.map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link href={item.href} className="flex items-center gap-2">
              {item.icon} {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
