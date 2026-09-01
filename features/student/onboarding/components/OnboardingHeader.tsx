import { cn } from "@/lib/helpers/cn";
import { FaGraduationCap } from "react-icons/fa";
import { useStepperStore } from "../store/useStepperStore";



const OnboardingHeader = () => {
  
  const currentStep = useStepperStore((state) => state.currentStep);

  return (
    <div className={cn("flex items-center gap-2 px-2 justify-between w-full",
    )}>
      <div className="flex gap-2 p-2 -ml-6 items-center">
        <div className="bg-btn-primary p-2 rounded-lg" aria-hidden="true">
          <FaGraduationCap className="text-red text-5xl" />
        </div>
        <div className="text-center">
          <p className="text-primary  tracking-wider text-sm font-semibold leading-none">
            ScholarHub
          </p>
          <span className="text-xs tracking-wider text-primary leading-none whitespace-nowrap">
            WELCOME ABOARD
          </span>
        </div>
      </div>
      {currentStep !== 0 && (
        <div>
          <span className="text-md tracking-wide leading-none text-slate-900 text-primary font-bold">
            Step {currentStep} of 5
          </span>
        </div>
      )}
    </div>
  );
};

export default OnboardingHeader;
