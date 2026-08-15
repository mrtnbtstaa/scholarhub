"use client";

import SidebarMenu from "./SidebarMenu";
import { cn } from "@/lib/helpers/cn";
import { ADMIN_SIDEBAR_MENUS } from "../../../data/adminSidebarMenu";
import { STUDENT_SIDEBAR_MENUS } from "../../../data/studentSidebarMenu";
import Button from "@/components/ui/Button/Button";
import Divider from "@/components/shared/Divider/Divider";
import { MdLogout } from "react-icons/md";
import BrandHeader from "@/components/shared/BrandHeader/BrandHeader";

const Sidebar = ({ isAdmin }: { isAdmin?: boolean }) => {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen w-64 bg-[#fefffe] border-r border-primary-border md:flex hidden flex-col transition-all duration-200 ease-in-out z-300",
      )}
    >
      <BrandHeader className="mt-2 ml-2" isAdmin={isAdmin} />
      <nav
        aria-label="Main Navigation"
        className="flex flex-1 flex-col justify-between"
      >
        <SidebarMenu
          menus={isAdmin ? ADMIN_SIDEBAR_MENUS : STUDENT_SIDEBAR_MENUS}
        />
        <div className="m-2">
          <Divider />
          <Button prefixIcon={MdLogout} className="p-3 mt-2 w-full" variants="danger">Logout</Button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
