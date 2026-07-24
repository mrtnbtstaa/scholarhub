import { cn } from "@/lib/utils";
import { ElementType } from "react";

const StepperIconProgress = ({
  icon: Icon,
  isCurrentStep,
}: {
  icon: ElementType;
  isCurrentStep: boolean;
}) => {
  return (
    <div className={
        cn("rounded-full p-2", isCurrentStep ? "bg-secondary border-2 border-white" : "bg-[#f5f6ff]")
    }>
      <Icon className="text-white text-2xl" />
    </div>
  );
};

export default StepperIconProgress;
