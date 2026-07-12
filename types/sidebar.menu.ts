import { ElementType } from "react";
import {
  MdApproval,
  MdBookmark,
  MdCalendarMonth,
  MdDashboard,
  MdNotifications,
  MdPerson,
  MdSearch,
  MdSettings,
} from "react-icons/md";

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
    icon: MdSearch,
    href: "/browse-scholarships",
  },
  {
    title: "Saved Scholarships",
    icon: MdBookmark,
    href: "/saved-scholarships",
  },
  {
    title: "My Applications",
    icon: MdApproval,
    href: "/my-applications",
  },
  {
    title: "My Documents",
    icon: MdApproval,
    href: "/my-documents",
  },
  {
    title: "Calendar",
    icon: MdCalendarMonth,
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
