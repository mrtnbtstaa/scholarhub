import Card from "@/components/shared/Card/Card";
import { cn } from "@/lib/cn";
import { ElementType } from "react";

interface CalendarCardProps {
  variants?:
    | "upcoming"
    | "app-deadline"
    | "docs-deadline"
    | "interviews"
    | "personal goals";
  icon: ElementType;
  title: string;
  count: number;
}

const CalendarCard = ({
  variants = "upcoming",
  icon: Icon,
  title,
  count,
}: CalendarCardProps) => {
  return (
    <Card className="p-4">
      <div className="flex flex-col items-start gap-2">
        <div
          className={cn(
            "rounded-2xl p-2",
            variants === "upcoming" && "bg-[#f2f6ff]",
            variants === "app-deadline" && "bg-[#f2f6ff]",
            variants === "docs-deadline" && "bg-[#fef8c2]",
            variants === "interviews" && "bg-[#f3e8ff]",
            variants === "personal goals" && "bg-[#ddfde7]",
          )}
        >
          <Icon
            className={cn(  
              "text-lg",
              variants === "upcoming" && "text-[#002045]",
              variants === "app-deadline" && "text-[#67375c]",
              variants === "docs-deadline" && "text-[#f49e0a]",
              variants === "interviews" && "text-[#9233eb]",
              variants === "personal goals" && "text-[#11b881]",
            )}
          />
        </div>
        <h3 className="lg:text-lg md:text-md text-sm font-semibold tracking-wider">{title}</h3>
        <span className="md:text-2xl text-lg font-semibold tracking-wider">{count}</span>
      </div>
    </Card>
  );
};

export default CalendarCard;
