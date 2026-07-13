import { ElementType } from "react";
import { IoMdDocument } from "react-icons/io";
import {
  MdBookmark,
  MdDashboard,
  MdNotifications,
  MdPerson,
  MdSettings,
} from "react-icons/md";
import { PiCalendarFill } from "react-icons/pi";
import { RiSearchAiFill } from "react-icons/ri";

interface SidebarMenuProps {
  title: string;
  icon: ElementType;
  href: string;
}

export const SidebarMenus: SidebarMenuProps[] = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    href: "/dashboard",
  },
  {
    title: "Browse Scholarships",
    icon: RiSearchAiFill,
    href: "/browse-scholarships",
  },
  {
    title: "Saved Scholarships",
    icon: MdBookmark,
    href: "/saved-scholarships",
  },
  {
    title: "My Applications",
    icon: IoMdDocument,
    href: "/my-applications",
  },
  {
    title: "My Documents",
    icon: IoMdDocument  ,
    href: "/my-documents",
  },
  {
    title: "Calendar",
    icon: PiCalendarFill,
    href: "/calendar",
  },
  {
    title: "Notifications",
    icon: MdNotifications,
    href: "/notifications",
  },
  {
    title: "Profile",
    icon: MdPerson,
    href: "/profile",
  },
  {
    title: "Settings",
    icon: MdSettings,
    href: "/settings",
  },
];
