import Navigate from "@/components/ui/Navigate/Navigate";
import { ADMIN_SIDEBAR_MENUS } from "@/data/adminSidebarMenu";
import { STUDENT_SIDEBAR_MENUS } from "@/data/studentSidebarMenu";
import { useAuthStore } from "@/features/auth/store/authStore";

const SidebarMenu = () => {
  const user = useAuthStore((state) => state.user);
  const menus = user?.role === "admin" ? ADMIN_SIDEBAR_MENUS : STUDENT_SIDEBAR_MENUS;
  return (
    <div className="mt-8 flex flex-col gap-6 mx-4 transition-all duration-150">
      {menus &&
        menus.map((menu) => (
          <Navigate
            suffixIcon={menu.icon}
            variants="sidebar"
            href={menu.href ?? ""}
            key={menu.title}
            className="whitespace-nowrap"
          >
            {menu.title}
          </Navigate>
        ))}
    </div>
  );
};

export default SidebarMenu;
