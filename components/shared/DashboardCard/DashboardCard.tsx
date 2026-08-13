"use client"
import { ElementType, useEffect, useState } from "react";
import Card from "../Card/Card";
import { cn } from "@/lib/cn";
import NumberFlow from "@number-flow/react";

type DashboardCardProps = {
  icon: ElementType;
  className?:string; // for customization
  iconColor?: string;  //for customize of icon color
  count: number | string;
  title: string;
  status: string;
  variants?: "new" | "active" | "urgent" | "updated";
};

const DashboardCard = ({
  icon: Icon,
  className,
  iconColor,
  count,
  title,
  status,
  variants = "new",
}: DashboardCardProps) => {
  //test numberflow for static value only
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(Number(count));
  }, [count]);

  return (
    <Card className={cn("w-full p-2", className)}>
      <div className="flex items-center justify-between px-2 mt-2">

        <Icon className={`${iconColor} text-2xl`} />
        <div
          className={cn(
            "py-1 px-2 rounded-xl",
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
          <NumberFlow format={{ notation: "compact" }} value={value} respectMotionPreference={false} />
        </span>
        <h2 className="text-gray-400 tracking-wider whitespace-nowrap leading-none text-sm xl:text-base">
          {title}
        </h2>
      </div>
    </Card>
  );
};

export default DashboardCard;
