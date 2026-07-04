import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type MenuListProps = {
  textSize?: string;
  showSocial?: boolean;
};

const menuList = [
  { name: "Home", link: "/" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Services", link: "/services" },
  { name: "Inquire", link: "/inquire" },
];

const socials = [
  { name: "Instagram", link: "#" },
  { name: "Facebook", link: "#" },
];

const MenuList: React.FC<MenuListProps> = ({
  textSize = "text-6xl",
  showSocial = true,
}) => {
  return (
    <>
      {menuList.map((item, index) => (
        <div
          key={item.name}
          className="group relative flex gap-x-6 rounded-lg p-4 hover:text-primary-foreground/80 text-primary-foreground"
        >
          <div className="flex flex-row gap-4">
            <span>0{index + 1}</span>
            <a
              href={item.link}
              className={cn("font-light tracking-wider", textSize)}
            >
              {item.name}
              <span className="absolute inset-0" />
            </a>
          </div>
        </div>
      ))}
      {showSocial && (
        <div className="flex items-center justify-start mt-12">
          {socials.map((item, index) => (
            <Link
              key={item.name}
              href="#"
              className={cn(
                `px-4 uppercase text-sm hover:text-primary-foreground/80`,
                index !== 0 ? "border-l border-white/50" : "",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
export default MenuList;
