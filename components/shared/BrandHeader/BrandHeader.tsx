import { cn } from "@/lib/helpers/cn";
import { FaGraduationCap } from "react-icons/fa";

const BrandHeader = ({
  isAdmin,
  className
}: {
  isAdmin?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-2 transition-all duration-150",
        className
      )}
    >
      <div className="bg-btn-primary p-2 rounded-lg" aria-hidden="true">
        <FaGraduationCap className={cn("text-primary md:text-4xl text-2xl")} />
      </div>
      <div>
        <p className="text-primary tracking-wider lg:text-2xl md:text-lg font-semibold leading-none">
          ScholarHub
        </p>
        <span className="text-xs tracking-wider text-primary leading-none whitespace-nowrap">
          {isAdmin ? "ADMIN CONSOLE" : "STUDENT WORKSPACE"}
        </span>
      </div>
    </div>
  );
};

export default BrandHeader;
