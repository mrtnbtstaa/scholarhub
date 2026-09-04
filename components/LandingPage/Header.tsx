"use client";
import { Button } from "../ui/button";
import NavigationMenuHeader from "./NavigationMenu";
import { useModalActions } from "@/store/useModalStore";

const Header = () => {
  const { openModal } = useModalActions();
  return (
    <header className="w-screen fixed top-0 left-0 right-0 z-50 h-18 md:h-20 bg-background/80 backdrop-blur-md border-b border-muted">
      <div className="flex justify-between items-center w-full px-4 lg:px-6 max-w-[100rem] mx-auto h-full">
        <span className="text-lg md:text-2xl font-manrope font-extrabold">ScholarHub</span>
        <NavigationMenuHeader />
        <div className="space-x-4 flex">
          <Button
            variant="ghost"
            onClick={() => openModal("login")}
            className="hidden md:flex md:px-6 md:py-6 md:text-lg"
          >
            Sign In
          </Button>
          <Button
            onClick={() => openModal("register")}
            className="md:text-lg md:px-6 md:py-6"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
