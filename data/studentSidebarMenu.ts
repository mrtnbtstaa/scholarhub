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
import { routes } from "@/lib/constants/routes";

export const STUDENT_SIDEBAR_MENUS: MenuProps[] = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    href: routes.student.dashboard,
  },
  {
    title: "Browse Scholarships",
    icon: RiSearchAiFill,
    href: routes.student.browseScholarships,
  },
  {
    title: "Saved Scholarships",
    icon: MdBookmark,
    href: routes.student.savedScholarships,
  },
  {
    title: "My Applications",
    icon: IoMdDocument,
    href: routes.student.applications,
  },
  {
    title: "My Documents",
    icon: IoMdDocument  ,
    href: routes.student.documents,
  },
  {
    title: "Calendar",
    icon: PiCalendarFill,
    href: routes.student.calendar,
  },
  {
    title: "Profile",
    icon: MdPerson,
    href: routes.student.profile,
  },
  {
    title: "Settings",
    icon: MdSettings,
    href: routes.student.settings,
  },
];
