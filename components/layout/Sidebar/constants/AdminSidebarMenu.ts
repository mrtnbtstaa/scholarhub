import { IoMdDocument } from "react-icons/io";
import { MdBookmark, MdDashboard, MdPerson, MdSettings } from "react-icons/md";
import { PiCalendarFill } from "react-icons/pi";
import { RiSearchAiFill } from "react-icons/ri";
import { MenuProps } from "@/types/menu.types";

export const ADMIN_SIDEBAR_MENUS: MenuProps[] = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    href: "/admin/dashboard",
  },
  {
    title: "Scholarships",
    icon: RiSearchAiFill,
    href: "/admin/scholarships",
  },
  {
    title: "Providers",
    icon: MdBookmark,
    href: "/admin/providers",
  },
  {
    title: "Students",
    icon: IoMdDocument,
    href: "/admin/students",
  },
  {
    title: "Applications",
    icon: IoMdDocument,
    href: "/admin/applications",
  },
  {
    title: "Announcements",
    icon: PiCalendarFill,
    href: "/admin/announcements",
  },
  {
    title: "Reports",
    icon: MdPerson,
    href: "/admin/reports",
  },
  {
    title: "Audit Logs",
    icon: MdSettings,
    href: "/admin/audit-logs",
  },
  {
    title: "Settings",
    icon: MdSettings,
    href: "/admin/settings",
  }
];
