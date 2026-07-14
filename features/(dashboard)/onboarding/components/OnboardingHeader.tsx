import { cn } from "@/lib/utils";
import { useStepperStore } from "@/features/(dashboard)/onboarding/store/useStepperStore";
import { FaGraduationCap } from "react-icons/fa";



const OnboardingHeader = () => {
  
  const currentStep = useStepperStore((state) => state.currentStep);

  return (
    <div className={cn("flex items-center gap-2 p-2 mt-4 w-full",
      currentStep === 0 ? "justify-center" : "justify-between"
    )}>
      <div className="flex gap-2 items-center">
        <div className="bg-secondary p-2 rounded-lg" aria-hidden="true">
          <FaGraduationCap className="text-white/50 text-4xl" />
        </div>
        <div>
          <p className="text-secondary tracking-wider text-2xl font-semibold leading-none">
            ScholarHub
          </p>
          <span className="text-xs tracking-wider text-secondary leading-none whitespace-nowrap">
            WELCOME ABOARD
          </span>
        </div>
      </div>
      {currentStep !== 0 && (
        <div>
          <span className="text-md tracking-wide leading-none text-secondary font-bold">
            Step {currentStep} of 5
          </span>
        </div>
      )}
    </div>
  );
};

export default OnboardingHeader;
