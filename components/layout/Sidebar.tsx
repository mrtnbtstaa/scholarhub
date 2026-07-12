"use client";

import { SidebarMenus } from "@/types/sidebar.menu";
import { FaGraduationCap } from "react-icons/fa";
import Navigate from "../ui/Navigate/Navigate";
import Image from "next/image";
import Divider from "../shared/Divider/Divider";
import { MdLogout } from "react-icons/md";
import Button from "../ui/Button/Button";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 h-screen w-72 bg-[#fefffe] border-r border-[#c5c7cf] flex flex-col">
      <div className="flex gap-2 p-2 mt-4">
        <div className="bg-secondary p-2 rounded-2xl">
          <FaGraduationCap className="text-white/50 text-4xl" />
        </div>
        <div>
          <h2 className="text-secondary tracking-wider text-2xl font-semibold leading-none">
            ScholarHub
          </h2>
          <span className="text-xs tracking-wider text-secondary leading-none">
            STUDENT WORKSPACE
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="mt-8 flex flex-col gap-8 mx-4">
          {SidebarMenus &&
            SidebarMenus.map((menu) => (
              <Navigate
                icon={menu.icon}
                variants="sidebar"
                href={menu.href}
                key={menu.title}
              >
                {menu.title}
              </Navigate>
            ))}
        </div>
        <div className="mx-4">
          <Divider />
          <div className="flex items-start gap-2">
            <div className=" mb-4">
              <Image
                alt="profile image"
                width={40}
                height={40}
                loading="eager"
                src={"/assets/hero.png"}
                className="rounded-full aspect-square"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <h2 className="text-sm tracking-wide text-secondary font-semibold">
                  Martin Bautista
                </h2>
                <h3 className="text-sm tracking-wider font-medium text-gray-600">
                  Computer Science
                </h3>
              </div>
              <Button variants="none">
                <MdLogout className="text-2xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
