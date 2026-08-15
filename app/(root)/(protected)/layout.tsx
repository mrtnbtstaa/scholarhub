"use client";

import Header from "@/components/layout/Header/Header";
import DropdownMenu from "@/components/layout/Menu/DropdownMenu";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { ADMIN_SIDEBAR_MENUS } from "@/data/adminSidebarMenu";
import { STUDENT_SIDEBAR_MENUS } from "@/data/studentSidebarMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Header />
      <DropdownMenu
        menus={true ? ADMIN_SIDEBAR_MENUS : STUDENT_SIDEBAR_MENUS}
      />
      <div className="md:ml-64">
        <Sidebar isAdmin={false} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
