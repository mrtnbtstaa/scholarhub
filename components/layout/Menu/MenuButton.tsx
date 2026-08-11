import Button from "@/components/ui/Button/Button";
import { useDropdownMenuStore } from "@/store/useDropdownMenuStore";
import { HiMenuAlt2 } from "react-icons/hi";

const MenuButton = () => {
  const isMenuOpen = useDropdownMenuStore((state) => state.isMenuOpen);
  const { toggleMenu } = useDropdownMenuStore((state) => state.action);
  return (
    <Button
      className="md:hidden ml-4 block"
      variants="custom"
      aria-label="Sidebar Menu"
      aria-labelledby="Dropdown Menu"
      onClick={() => toggleMenu(isMenuOpen)}
    >
      <HiMenuAlt2 className="text-2xl text-primary" />
    </Button>
  );
};

export default MenuButton;
