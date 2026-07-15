import { cn } from "@/lib/utils";
import HeaderMenu from "./HeaderMenu";

const Header = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <header className="bg-[#ffffff] w-full p-4 border-b border-[#c5c7cf] sticky top-0 z-200">
      <div className={cn(isSidebarOpen ? "ml-64" : "ml-18")}>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
