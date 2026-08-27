import { cn } from "@/lib/helpers/cn";

interface ProgressProps {
  percentage: number;
  textPercentage?: string;
  className?: string;
}

const LineProgress = ({ percentage, textPercentage, className }: ProgressProps) => {
  return (
    <div className={
      cn("bg-[#e4efff] w-full h-2 rounded-full flex items-center gap-2")
    }>
      <div
        className={cn("w-full h-2 rounded-full", className)}
        style={{ width: `${percentage}%` }}
      ></div>
      {textPercentage && <span className="text-primary text-sm tracking-wider leading-none">{textPercentage}%</span>}
    </div>
  );
};

export default LineProgress;
