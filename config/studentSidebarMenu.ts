import { IoMdDocument } from "react-icons/io";
import {
  MdBookmark,
  MdDashboard,
  MdPerson,
  MdSettings,
} from "react-icons/md";
import { PiCalendarFill } from "react-icons/pi";
import { RiSearchAiFill } from "react-icons/ri";
import { MenuProps } from "@/types/shared/menu.types";

export const STUDENT_SIDEBAR_MENUS: MenuProps[] = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    href: "/student/dashboard",
  },
  {
    title: "Browse Scholarships",
    icon: RiSearchAiFill,
    href: "/student/browse-scholarships",
  },
  {
    title: "Saved Scholarships",
    icon: MdBookmark,
    href: "/student/saved-scholarships",
  },
  {
    title: "My Applications",
    icon: IoMdDocument,
    href: "/student/my-applications",
  },
  {
    title: "My Documents",
    icon: IoMdDocument  ,
    href: "/student/my-documents",
  },
  {
    title: "Calendar",
    icon: PiCalendarFill,
    href: "/student/calendar",
  },
  {
    title: "Profile",
    icon: MdPerson,
    href: "/student/profile",
  },
  {
    title: "Settings",
    icon: MdSettings,
    href: "/student/settings",
  },
];
