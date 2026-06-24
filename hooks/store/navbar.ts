import { create } from "zustand";

type NavbarStore = {
  showNav: boolean;
  showMenu: boolean;
  setShowNav: (showNav: boolean) => void;
  setShowMenu: (showMenu: boolean) => void;
};
export const useNavbar = create<NavbarStore>((set) => ({
  showNav: false,
  showMenu: false,
  setShowNav: (showNav) =>
    set({
      showNav,
    }),
  setShowMenu: (showMenu) =>
    set({
      showMenu,
    }),
}));
