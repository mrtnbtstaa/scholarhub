import SidebarMenu from "./SidebarMenu";
import { cn } from "@/lib/helpers/cn";
import Button from "@/components/ui/Button/Button";
import Divider from "@/components/shared/Divider/Divider";
import { MdLogout } from "react-icons/md";
import BrandHeader from "@/components/shared/BrandHeader/BrandHeader";
import { useLogout } from "@/features/auth/hooks/use-auth";
import { useAuthStore } from "@/features/auth/store/authStore";

const Sidebar = () => {
  const user = useAuthStore((state) => state.user);
  const isAdmin = user?.role === "admin";
  const {handleSubmit, isPending} = useLogout();
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-primary-border md:flex hidden flex-col transition-all duration-200 ease-in-out z-300",
      )}
    >
      <BrandHeader className="mt-2 ml-2" isAdmin={isAdmin} />
      <nav
        aria-label="Main Navigation"
        className="flex flex-1 flex-col justify-between"
      >
        <SidebarMenu/>
        <div className="m-2">
          <Divider />
          <form onSubmit={handleSubmit} method="POST">
            <Button isLoading={isPending} type="submit" prefixIcon={MdLogout} className="p-3 mt-2 w-full" variants="danger">Logout</Button>
          </form>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
