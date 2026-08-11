import Navigate from "@/components/ui/Navigate/Navigate";
import { MenuProps } from "@/types/shared/menu.types";

const SidebarMenu = ({menus}: { menus: MenuProps[]}) => {
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
