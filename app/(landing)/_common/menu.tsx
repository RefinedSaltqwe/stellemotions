"use client";
import { useNavbar } from "@/hooks/store/navbar";
import { cn } from "@/lib/utils";
import { XIcon } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import MenuList from "./menu-list";
import { site } from "@/constants";

const Menu: React.FC = () => {
  const showMenu = useNavbar((state) => state.showMenu);
  const setShowMenu = useNavbar((state) => state.setShowMenu);
  const [hideMenu, setHideMenu] = useState<boolean>();

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
      <div className="absolute top-0 bottom-0 flex items-center overflow-hidden whitespace-nowrap">
        <span
          className="text-9xl font-serif uppercase text-primary-foreground/3 tracking-wider"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          {new Array(3).fill(site.name).join(" ")}
        </span>
      </div>
      <div className="flex flex-row justify-end p-4">
        <div
          className="cursor-pointer p-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <XIcon size={32} />
        </div>
      </div>

      {/* MENU LIST */}
      <div className="flex flex-1 items-center justify-center text-primary-foreground font-serif">
        <div className="p-4">
          <MenuList />
        </div>
      </div>
    </div>
  );
};
export default Menu;
