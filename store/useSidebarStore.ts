import { create } from "zustand";

interface SidebarState {
  isSidebarOpen: boolean;
  action: {
    toggleSidebar: (value: boolean) => void;
  };
}

export const useSidebarStore = create<SidebarState>()((set) => ({
  isSidebarOpen: false,
  action: {
    toggleSidebar: (value) => set({ isSidebarOpen: !value }),
  },
}));
