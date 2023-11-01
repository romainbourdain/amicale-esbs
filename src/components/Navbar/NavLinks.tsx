import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import { NavbarItem } from "@/types/Navbar";
import { Fragment } from "react";

const NavLinks = ({ items }: { items: NavbarItem[] }) => {
  return (
    <div className="flex items-center gap-2">
      {items.map((item, id) => (
        <Fragment key={id}>
          {item.type === "link" ? (
            <Link
              href={item.href || ""}
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              {item.name}
            </Link>
          ) : (
            <NavDropdown
              key={id}
              title={item.name}
              content={item.content || []}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default NavLinks;
