import Navigate from "@/components/ui/Navigate/Navigate";
import { MenuProps } from "@/types/menu.types";

const SidebarMenu = ({isSidebarOpen, menus}: {isSidebarOpen: boolean, menus: MenuProps[]}) => {
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
            {isSidebarOpen && menu.title}
          </Navigate>
        ))}
    </div>
  );
};

export default SidebarMenu;
