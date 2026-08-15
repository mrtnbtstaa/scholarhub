import { IoMdDocument } from "react-icons/io";
import { MdBookmark, MdDashboard, MdPerson, MdSettings } from "react-icons/md";
import { PiCalendarFill } from "react-icons/pi";
import { RiSearchAiFill } from "react-icons/ri";
import { MenuProps } from "@/types/shared/menu.types";
import { routes } from "@/lib/constants/routes";

export const ADMIN_SIDEBAR_MENUS: MenuProps[] = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    href: routes.admin.dashboard,
  },
  {
    title: "Scholarships",
    icon: RiSearchAiFill,
    href: routes.admin.scholarships,
  },
  {
    title: "Providers",
    icon: MdBookmark,
    href: routes.admin.providers,
  },
  {
    title: "Students",
    icon: IoMdDocument,
    href: routes.admin.students,
  },
  {
    title: "Applications",
    icon: IoMdDocument,
    href: routes.admin.applications,
  },
  // {
  //   title: "Announcements",
  //   icon: PiCalendarFill,
  //   href: "/admin/announcements",
  // },
  // {
  //   title: "Reports & Analytics",
  //   icon: MdPerson,
  //   href: "/admin/reports-analytics",
  // },
  // {
  //   title: "Audit Logs",
  //   icon: MdSettings,
  //   href: "/admin/audit-logs",
  // },
  // {
  //   title: "Settings",
  //   icon: MdSettings,
  //   href: "/admin/settings",
  // }
];
