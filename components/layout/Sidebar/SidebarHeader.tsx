import { cn } from "@/lib/cn";
import { FaGraduationCap } from "react-icons/fa";

const SidebarHeader = ({
  isSidebarOpen,
  isAdmin,
}: {
  isSidebarOpen: boolean;
  isAdmin?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex gap-2 p-2 mt-4 transition-all duration-150",
        isSidebarOpen && "mx-2",
      )}
    >
      <div className="bg-btn-primary p-2 rounded-lg" aria-hidden="true">
        <FaGraduationCap className={cn("text-white text-4xl")} />
      </div>
      <div className={cn(isSidebarOpen ? "block" : "hidden")}>
        <p className="text-secondary tracking-wider text-2xl font-semibold leading-none">
          ScholarHub
        </p>
        <span className="text-xs tracking-wider text-secondary leading-none whitespace-nowrap">
          {isAdmin ? "ADMIN CONSOLE" : "STUDENT WORKSPACE"}
        </span>
      </div>
    </div>
  );
};

export default SidebarHeader;
