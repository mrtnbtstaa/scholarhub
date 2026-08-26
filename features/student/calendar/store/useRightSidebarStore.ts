import { create } from "zustand";

interface SidebarState {
  getId: string | null;
  toggleSideBar: boolean;
  action: {
    setId: (value: string) => void;
    setSidebar: (value: boolean) => void;
  };
}

export const useRightSidebarStore = create<SidebarState>((set) => ({
  toggleSideBar: false,
  getId: null,
  action: {
    setSidebar: (value) => set({ toggleSideBar: value }),
    setId: (value) => set({getId: value})
  },
}));
