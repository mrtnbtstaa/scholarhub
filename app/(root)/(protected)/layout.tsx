"use client";

import Header from "@/components/layout/Header/Header";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);

  return (
    <div className="w-full">
      <Header isSidebarOpen={isSidebarOpen} />
      <div className={cn(isSidebarOpen ? "ml-64" : "ml-18")}>
        <Sidebar isAdmin={true} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
