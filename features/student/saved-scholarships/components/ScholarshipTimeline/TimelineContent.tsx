import { cn } from "@/lib/helpers/cn";

const getStatusConfig = (days: number) => {
  if (days <= 5) {
    return {
      dotColor: "bg-[#bb1b1a]",
      textColor: "text-secondary",
      badgeClass: "text-red-600 font-semibold",
    };
  } else if (days > 6 && days <= 100) {
    return {
      dotColor: "bg-secondary",
      textColor: "text-secondary",
      badgeClass: "text-secondary",
    };
  } else {
    return {
      dotColor: "bg-[#c5c7cf]",
      textColor: "text-[#6b7483]",
      badgeClass: "text-gray-500",
    };
  }
};

interface TimelineProps {
  title: string;
  remainingDays: number;
  date: string;
}

const TimelineContent = ({ title, remainingDays, date }: TimelineProps) => {
  const status = getStatusConfig(remainingDays);

  return (
    <div className="flex items-start gap-4 mt-6 relative">
      <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center border border-gray-100 shadow-sm z-10 shrink-0">
        <div className={cn("w-3 h-3 rounded-full", status.dotColor)}></div>
      </div>
      <div className="flex flex-col items-start">
        <p
          className={cn(
            "text-sm tracking-widest font-semibold",
            status.badgeClass,
          )}
        >
          {date}
        </p>
        <h4
          className={cn(
            "text-lg tracking-widest font-normal",
            status.textColor,
          )}
        >
          {title}
        </h4>
        <p
          className={cn(
            "font-normal tracking-wider leading-none text-sm",
            status.badgeClass,
          )}
        >
          {remainingDays} Days Remaining
        </p>
      </div>
    </div>
  );
};

export default TimelineContent;
