import { cn } from "@/lib/utils";
import HeaderMenu from "./HeaderMenu";

const Header = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <header className="bg-[#ffffff] w-full p-4 border-b border-[#c5c7cf]">
      <div className={cn(isSidebarOpen ? "ml-72" : "ml-18")}>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
