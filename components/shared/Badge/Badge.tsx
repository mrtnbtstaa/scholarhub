import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface BadgeProps {
  title: string;
  icon: ElementType;
  type?: "badge01" | "badge02";
}

const Badge = ({ title, icon: Icon, type = "badge01" }: BadgeProps) => {
  return (
    <div
      className={cn(
        "p-2 rounded-full text-center",
        type === "badge01" ? "bg-[#eff5fe]" : "bg-[#e3fff1]",
      )}
    >
      <div className="flex items-center flex-wrap gap-2">
        <Icon className={cn(type === "badge02" && "text-[#1d6f48]")} />
        <h3 className={cn(
          "font-semibold tracking-wider text-xs",
          type === "badge01" ? "text-gray-700" : "text-[#006c49]"
        )}>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Badge;
