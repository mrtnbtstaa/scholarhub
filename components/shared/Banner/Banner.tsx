import { MdInfo } from "react-icons/md";
import Card from "../Card/Card";
import { cn } from "@/lib/utils";
import React from "react";

interface BannerProps {
  className?: string;
  children: React.ReactNode;
  iconColor?: string;
}

const Banner = ({ className, children, iconColor = "text-secondary" }: BannerProps) => {
  return (
    <Card
      variants="custom"
      className={cn("bg-[#e4efff] p-4", className)}
    >
      <div className="flex md:items-center items-start gap-2">
        <MdInfo
          className={cn("text-3xl md:text-4xl", iconColor)}
        />
        {children}
      </div>
    </Card>
  );
};

export default Banner;
