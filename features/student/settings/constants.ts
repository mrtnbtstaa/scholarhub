import { MenuProps } from "@/types/menu.types";
import { LuDownload, LuLock, LuPaintBucket, LuTriangleAlert } from "react-icons/lu";
import { MdNotifications, MdSecurity } from "react-icons/md";

export const SETTINGS_MENU: MenuProps[] = [
  {
    title: "Notification Preferences",
    icon: MdNotifications,
  },
  {
    title: "Security & Access",
    icon: MdSecurity,
  },
  // {
  //   title: "Privacy",
  //   icon: LuLock,
  // },
  // {
  //   title: "Appearance",
  //   icon: LuPaintBucket,
  // },
  {
    title: "Data & Export",
    icon: LuDownload,
  },
  {
    title: "Danger Zone",
    icon: LuTriangleAlert,
  },
];