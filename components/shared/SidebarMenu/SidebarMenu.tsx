"use client";

import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { MenuProps } from "@/types/menu.types";
import Navigate from "@/components/ui/Navigate/Navigate";

const SidebarMenu = ({
  menus,
  currentMenu,
}: {
  menus: MenuProps[];
  currentMenu: string;
}) => {
  const [activeMenu, setActiveMenu] = useState<string>(currentMenu);

  return (
    <div className="flex sticky top-20 items-start flex-col gap-2 lg:w-[25%] w-full">
      {menus.map(({ title, icon }) => {
        const isActive = title === activeMenu;
        return (
          <Navigate
          href={`#${title}`}
            onClick={() => setActiveMenu(title)}
            className={cn(
              "p-4 w-full",
              isActive ? "bg-secondary text-white" : "text-secondary",
            )}
            variants="custom"
            key={title}
            // iconClass={`${!isActive && "text-gray-600"}`}
            suffixIcon={icon}
          >
            {title}
          </Navigate>
        );
      })}
    </div>
  );
};

export default SidebarMenu;
