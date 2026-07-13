import { cn } from "@/lib/utils";
import { FaGraduationCap } from "react-icons/fa";

const SidebarHeader = ({isSidebarOpen}: {isSidebarOpen: boolean}) => {
  return (
    <div className={cn(
      "flex gap-2 p-2 mt-4 transition-all duration-150",
      isSidebarOpen && "mx-2"
    )}>
      <div className="bg-secondary p-2 rounded-lg" aria-hidden="true">
        <FaGraduationCap className={cn(
          "text-white/50 text-4xl",
        )} />
      </div>
      <div className={cn(
        isSidebarOpen ? "block" : "hidden"
      )}>
        <p className="text-secondary tracking-wider text-2xl font-semibold leading-none">
          ScholarHub
        </p>
        <span className="text-xs tracking-wider text-secondary leading-none whitespace-nowrap">
          STUDENT WORKSPACE
        </span>
      </div>
    </div>
  );
};

export default SidebarHeader;
