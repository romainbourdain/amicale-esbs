import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import { NavbarItem } from "@/types/Navbar";

const NavLinks = ({ items }: { items: NavbarItem[] }) => {
  return (
    <div className="container flex items-center py-4 m-auto justify-center gap-2">
      {items.map((item, id) => (
        <>
          {item.type === "link" ? (
            <Link
              href={item.href || ""}
              key={id}
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
        </>
      ))}
    </div>
  );
};

export default NavLinks;
