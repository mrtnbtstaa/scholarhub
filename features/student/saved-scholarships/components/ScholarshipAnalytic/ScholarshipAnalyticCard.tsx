import Card from "@/components/shared/Card/Card";
import { cn } from "@/lib/cn";
import { ElementType } from "react";

interface SaveScholarshipProps {
  icon: ElementType;
  title: string;
  subTitle: string;
  count: number;
  variants?: "total" | "urgent" | "ready" | "new";
}

const ScholarshipAnalyticCard = ({
  icon: Icon,
  title,
  subTitle,
  count,
  variants = "total",
}: SaveScholarshipProps) => {
  return (
    <Card className="p-4 w-full">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "p-4 rounded-2xl",
            variants === "total" && "bg-secondary",
            variants === "urgent" && "bg-[#fedbd6]",
            variants === "ready" && "bg-[#6df9bb]",
            variants === "new" && "bg-[#d3e4fe]",
          )}
        >
          <Icon
            className={cn(
              "text-2xl",
              variants === "total" && "text-[#6c97c9]",
              variants === "urgent" && "text-[#94000a]",
              variants === "ready" && "text-[#1ba594]",
              variants === "new" && "text-[#134278]",
            )}
          />
        </div>
        <span className={cn(
            "text-md tracking-wide font-semibold",
            variants === "total" && "text-gray-400",
            variants === "urgent" && "text-[#94000a]",
            variants === "ready" && "text-[#1ba594]"
        )}>{subTitle}</span>
      </div>
      <div className="mt-4">
        <span className="text-2xl font-bold tracking-wider">{count}</span>
        <h3 className="font-semibold tracking-wider text-md text-gray-500">
          {title}
        </h3>
      </div>
    </Card>
  );
};

export default ScholarshipAnalyticCard;
