import { cn } from "@/lib/helpers/cn";

interface ProgressProps {
  percentage: number;
  textPercentage?: string;
  className?: string;
}

const LineProgress = ({ percentage, textPercentage, className }: ProgressProps) => {
  return (
    <div className="bg-[#e4efff] w-full h-2 rounded-full flex items-center gap-2">
      <div className="relative h-2 flex-1 rounded-full overflow-hidden bg-[#e4efff]">
        <div
          className={cn("progress-fill absolute inset-y-0 left-0 h-2 rounded-full overflow-hidden", className)}
          style={{ width: `${percentage}%` }}
        >
          <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
      {textPercentage && (
        <span className="text-primary text-sm tracking-wider leading-none">
          {textPercentage}%
        </span>
      )}
    </div>
  );
};

export default LineProgress;