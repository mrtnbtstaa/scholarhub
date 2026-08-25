"use client";

import Header from "@/components/layout/Header/Header";
import DropdownMenu from "@/components/layout/Menu/DropdownMenu";
import Sidebar from "@/components/layout/Sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Header />
      <DropdownMenu/>
      <div className="md:ml-64">
        <Sidebar/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
