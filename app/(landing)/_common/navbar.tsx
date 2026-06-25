"use client";
import { useNavbar } from "@/hooks/store/navbar";
import { cn } from "@/lib/utils";
import React from "react";
import ExploreMenuButton from "./explore-menu-button";

const Navbar: React.FC = () => {
  const showNav = useNavbar((state) => state.showNav);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full",
        "bg-black/30 backdrop-blur-md text-primary-foreground",
        "transition-all duration-500 ease-out",
        showNav ? "opacity-100 " : "opacity-0 pointer-events-none",
      )}
    >
      <div className="px-6 py-2">
        <ExploreMenuButton />
      </div>
    </header>
  );
};
export default Navbar;
