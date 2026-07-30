import { ElementType } from "react";
import Card from "../Card/Card";
import { cn } from "@/lib/cn";

type DashboardCardProps = {
  icon: ElementType;
  count: number | string;
  title: string;
  status: string;
  variants?: "new" | "active" | "urgent" | "updated";
};

const DashboardCard = ({
  icon: Icon,
  count,
  title,
  status,
  variants = "new",
}: DashboardCardProps) => {
  return (
    <Card className="w-full p-2">
      <div className="flex items-center justify-between px-2 mt-2">
        <Icon className="text-2xl" />
        <div
          className={cn(
            "p-2 rounded-2xl",
            variants === "new" && "bg-[#d3fceb]",
            variants === "active" && "bg-[#f3f6ff]",
            variants === "urgent" && "bg-[#fedbd6]",
            variants === "updated" && "bg-[#e9f1fe]",
          )}
        >
          <span
            className={cn(
              "tracking-widest text-sm",
              variants === "new" && "text-[#54ad88]",
              variants === "active" && "text-[#b7c7f7]",
              variants === "urgent" && "text-[#f0a296]",
              variants === "updated" && "text-[#94bbf8]",
            )}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start px-2 mt-4 mb-2">
        <span className="text-secondary text-2xl font-bold tracking-wide">
          {count}
        </span>
        <h2 className="text-gray-400 tracking-wider leading-none text-md">
          {title}
        </h2>
      </div>
    </Card>
  );
};

export default DashboardCard;
