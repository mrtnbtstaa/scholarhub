"use client";

import SidebarProfile from "./SidebarProfile";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import { useSidebarStore } from "@/store/useSidebarStore";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-[#fefffe] border-r border-[#c5c7cf] flex flex-col transition-all duration-200 ease-in-out z-300",
        isSidebarOpen ? " w-64" : "w-18",
      )}
    >
      <SidebarHeader isSidebarOpen={isSidebarOpen} />
      <nav
        aria-label="Main Navigation"
        className="flex flex-1 flex-col justify-between"
      >
        <SidebarMenu isSidebarOpen={isSidebarOpen} />
        <SidebarProfile isSidebarOpen={isSidebarOpen} />
      </nav>
    </aside>
  );
};

export default Sidebar;
