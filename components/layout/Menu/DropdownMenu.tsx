import Card from "@/components/shared/Card/Card";
import Button from "@/components/ui/Button/Button";
import Navigate from "@/components/ui/Navigate/Navigate";
import { ADMIN_SIDEBAR_MENUS } from "@/data/adminSidebarMenu";
import { STUDENT_SIDEBAR_MENUS } from "@/data/studentSidebarMenu";
import { useAuthStore } from "@/features/auth/store/authStore";
import { cn } from "@/lib/helpers/cn";
import { useDropdownMenuStore } from "@/store/useDropdownMenuStore";
import { MdLogout } from "react-icons/md";

const DropdownMenu = () => {
  const user = useAuthStore((state) => state.user);
  const isMenuOpen = useDropdownMenuStore((state) => state.isMenuOpen);
  const menus = user?.role === "admin" ? ADMIN_SIDEBAR_MENUS : STUDENT_SIDEBAR_MENUS;
  return (
    <Card
      variants="custom"
      as="header"
      className={cn(
        "absolute bg-white border overflow-hidden border-primary-border z-100 px-4 left-0 duration-50 ease-linear rounded-none top-18 w-full md:hidden block",
        isMenuOpen ? "top-18 translate-y-0" : "top-0 -translate-y-full",
      )}
    >
      <nav className="mb-4 w-full">
        <ul className="flex flex-col items-start gap-4 w-full">
          {menus.map((menu) => (
            <li className="mt-4 flex flex-col w-full" key={menu.title}>
              <Navigate
                suffixIcon={menu.icon}
                variants="sidebar"
                href={menu.href ?? ""}
                key={menu.title}
                className="whitespace-nowrap"
              >
                {menu.title}
              </Navigate>
            </li>
          ))}
          <li className="w-full">
            <Button
              prefixIcon={MdLogout}
              className="p-3 mt-2 w-full"
              variants="danger"
            >
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default DropdownMenu;
