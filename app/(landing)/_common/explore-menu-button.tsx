"use client";
import { Button } from "@/components/ui/button";
import { useNavbar } from "@/hooks/store/navbar";
import { ListIcon } from "@phosphor-icons/react";
import React from "react";

const ExploreMenuButton: React.FC = () => {
  const setShowMenu = useNavbar((state) => state.setShowMenu);
  const showMenu = useNavbar((state) => state.showMenu);

  return (
    <Button
      variant={"ghost"}
      className="uppercase tracking-[0.25em] text-xs text-primary-foreground flex flex-row gap-2 p-0 hover:bg-transparent hover:text-primary-foreground"
      onClick={() => setShowMenu(!showMenu)}
    >
      <ListIcon size={16} /> Explore
    </Button>
  );
};
export default ExploreMenuButton;
