import Divider from "@/components/shared/Divider/Divider";
import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/helpers/cn";
import Image from "next/image";
import { MdLogout } from "react-icons/md";

const SidebarProfile = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <div>
      <Divider />
      <section className="flex items-center gap-2 mx-4 transition-all duration-150">
        {isSidebarOpen && (
          <Image
            alt="Martin Bautista's profile picture"
            width={40}
            height={40}
            loading="eager"
            src={"/assets/hero.png"}
            className="rounded-full aspect-square"
          />
        )}
        <div className="flex items-center justify-between w-full p-4">  
          <div className={cn(!isSidebarOpen ? "hidden" : "block")}>
            <p className="text-sm tracking-wide text-secondary font-semibold whitespace-nowrap">
              Martin Bautista
            </p>
            <p className="text-sm tracking-wider font-medium text-gray-600 whitespace-nowrap">
              Computer Science
            </p>
          </div>
          <Button
            variants="custom"
            aria-label="Log out"
            className={cn(!isSidebarOpen && "-ml-4")}
          >
            <MdLogout className="text-2xl" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SidebarProfile;
