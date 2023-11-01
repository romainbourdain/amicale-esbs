import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ReactNode } from "react";
import clsx from "clsx";

const SocialNetworkButton = ({
  className,
  link,
  icon,
  title,
}: {
  className?: string;
  link: string;
  icon: ReactNode;
  title: string;
}) => {
  return (
    <Link
      href={link}
      className={clsx(
        buttonVariants({ variant: "colored" }),
        "flex items-end gap-3 font-bold",
        className
      )}
    >
      {icon}
      <span className="hidden sm:inline">{title}</span>
    </Link>
  );
};

export default SocialNetworkButton;
