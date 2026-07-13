import Navigate from "@/components/ui/Navigate/Navigate";
import { SidebarMenus } from "@/types/sidebar.menu";

const SidebarMenu = ({isSidebarOpen}: {isSidebarOpen: boolean}) => {
  return (
    <div className="mt-8 flex flex-col gap-6 mx-4 transition-all duration-150">
      {SidebarMenus &&
        SidebarMenus.map((menu) => (
          <Navigate
            icon={menu.icon}
            variants="sidebar"
            href={menu.href}
            key={menu.title}
            className="whitespace-nowrap"
          >
            {isSidebarOpen && menu.title}
          </Navigate>
        ))}
    </div>
  );
};

export default SidebarMenu;
