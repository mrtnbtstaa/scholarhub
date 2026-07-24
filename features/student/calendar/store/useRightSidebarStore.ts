import { create } from "zustand";

interface SidebarState {
  toggleSideBar: boolean;
  action: {
    setSidebar: (value: boolean) => void;
  };
}

export const useRightSidebarStore = create<SidebarState>((set) => ({
  toggleSideBar: false,
  action: {
    setSidebar: (value) => set({ toggleSideBar: value }),
  },
}));
