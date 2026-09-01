import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/helpers/cn";
import { ElementType } from "react";

interface StepperIconProgressProps {
  icon: ElementType;
  currentStep: boolean;
  tooltip?: string;
  className?:string;
}


const StepperIconProgress = ({
  icon: Icon,
  currentStep,
  tooltip,
  className,
}: StepperIconProgressProps) => {
  return (
    <div className={`${className} relative group inline-flex items-center justify-center`}>
      {tooltip && (
       <Tooltip>
        <TooltipTrigger>
          <div
              className={cn(
                "flex items-center justify-center rounded-full p-2.5 transition-all duration-200 bg-primary text-primary-foreground",
                currentStep
                  ? " ring-4 ring-primary/20 shadow-sm scale-110"
                  : " bg-gray-300 text-gray-400 hover:bg-primary hover:text-primary-foreground hover:ring-4 hover:ring-primary/20",
              )}
            >
              <Icon className="text-xl shrink-0" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
            {tooltip}
        </TooltipContent>
      </Tooltip>
      )}
    </div>
  );
};

export default StepperIconProgress;