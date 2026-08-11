import { create } from "zustand";

interface MenuState {
  isMenuOpen: boolean;
  action: {
    toggleMenu: (value: boolean) => void;
  };
}

export const useDropdownMenuStore = create<MenuState>()((set) => ({
  isMenuOpen: false,
  action: {
    toggleMenu: (value) => set({ isMenuOpen: !value }),
  },
}));
