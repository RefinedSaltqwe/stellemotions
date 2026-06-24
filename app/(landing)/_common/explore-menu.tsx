"use client";
import { Button } from "@/components/ui/button";
import { useNavbar } from "@/hooks/store/navbar";
import { ListIcon } from "@phosphor-icons/react";
import React from "react";

const ExploreMenu: React.FC = () => {
  const setShowMenu = useNavbar((state) => state.setShowMenu);
  const showMenu = useNavbar((state) => state.showMenu);

  return (
    <Button
      variant={"ghost"}
      className="uppercase tracking-[0.25em] text-xs text-white flex flex-row gap-2"
      onClick={() => setShowMenu(!showMenu)}
    >
      <ListIcon size={16} /> Explore
    </Button>
  );
};
export default ExploreMenu;
