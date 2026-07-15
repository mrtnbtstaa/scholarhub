import { cn } from "@/lib/utils";

interface ProgressProps{
    percentage: number;
    className?: string;
}

const LineProgress = ({percentage, className}: ProgressProps) => {
  return (
    <div className="bg-[#e4efff] w-full h-2 rounded-full">
      <div
        className={cn(
            "w-full h-2 rounded-full",
            className
        )}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default LineProgress;
