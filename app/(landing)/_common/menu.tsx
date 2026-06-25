"use client";
import { useNavbar } from "@/hooks/store/navbar";
import { cn } from "@/lib/utils";
import { XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const menuList = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Services", link: "/services" },
  { name: "Inquire", link: "/inquire" },
];

const socials = [
  { name: "Instagram", link: "#" },
  { name: "Facebook", link: "#" },
];

const Menu: React.FC = () => {
  const showMenu = useNavbar((state) => state.showMenu);
  const setShowMenu = useNavbar((state) => state.setShowMenu);
  const [hideMenu, setHideMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMenu) {
      setTimeout(() => {
        setHideMenu(!showMenu);
      }, 1);
    } else {
      setTimeout(() => {
        setHideMenu(!showMenu);
      }, 500);
    }
  }, [showMenu]);
  return (
    <div
      className={cn(
        "inset-0 bg-primary z-100 text-primary-foreground flex flex-col fixed",
        "transition-all duration-500 ease-out",
        showMenu ? "opacity-100" : "opacity-0",
        hideMenu ? "hidden" : "",
      )}
    >
      <div className="flex flex-row justify-end p-4">
        <div
          className="cursor-pointer p-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <XIcon size={32} />
        </div>
      </div>

      {/* MENU LIST */}
      <div className="flex text-primary-foreground font-serif flex-col">
        <div className="p-4 mx-auto mt-12 xl:mt-48">
          {menuList.map((item, index) => (
            <div
              key={item.name}
              className="group relative flex gap-x-6 rounded-lg p-4 hover:text-primary-foreground/80 text-primary-foreground"
            >
              <div className="flex flex-row gap-4">
                <span>0{index + 1}</span>
                <a
                  href={item.link}
                  className="text-6xl font-light tracking-wider"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
              </div>
            </div>
          ))}
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
        </div>
      </div>
    </div>
  );
};
export default Menu;
