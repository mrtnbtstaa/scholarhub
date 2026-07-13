import Button from "@/components/ui/Button/Button";
import { useSidebarStore } from "@/store/useSidebarStore";
import { HiMenuAlt2 } from "react-icons/hi";

const HeaderMenu = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const { toggleSidebar } = useSidebarStore((state) => state.action);

  return (
    <Button
      variants="none"
      aria-label="Sidebar Menu"
      onClick={() => toggleSidebar(isSidebarOpen)}
    >
      <HiMenuAlt2 className="text-2xl text-primary" />
    </Button>
  );
};

export default HeaderMenu;
