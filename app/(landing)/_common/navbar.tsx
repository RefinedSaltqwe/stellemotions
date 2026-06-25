"use client";
import { useNavbar } from "@/hooks/store/navbar";
import { cn } from "@/lib/utils";
import React from "react";
import ExploreMenuButton from "./explore-menu-button";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const showNav = useNavbar((state) => state.showNav);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full",
        "bg-black/30 backdrop-blur-md text-primary-foreground",
        "transition-all duration-500 ease-out",
        showNav
          ? "opacity-100"
          : pathname !== "/"
            ? "opacity-100"
            : "opacity-0 pointer-events-none",
      )}
    >
      <div className="flex w-full flex-rox justify-between items-center">
        <div className="px-6 py-2">
          <ExploreMenuButton />
        </div>
        <div className="px-6 py-2">
          <Button
            variant={"ghost"}
            className="uppercase tracking-[0.25em] text-xs text-primary-foreground flex flex-row gap-2 p-0 hover:bg-transparent hover:text-primary-foreground font-normal"
          >
            Inquire
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
