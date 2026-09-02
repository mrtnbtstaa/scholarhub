"use client";
import { Button } from "../ui/button";
import NavigationMenuHeader from "./NavigationMenu";
import { useModalActions } from "@/store/useModalStore";

const Header = () => {
  const { openModal } = useModalActions();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center w-full lg:px-6 px-10 max-w-7xl mx-auto h-full">
        <span className="text-2xl font-manrope font-bold">ScholarHub</span>
        <NavigationMenuHeader />
        <div className="space-x-4">
          <Button
            variant={"ghost"}
            onClick={() => openModal("login")}
            className="px-8"
          >
            Login
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => openModal("register")}
            className="px-8"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
