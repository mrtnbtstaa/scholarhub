import Divider from "@/components/shared/Divider/Divider";
import Button from "@/components/ui/Button/Button";
import Navigate from "@/components/ui/Navigate/Navigate";
import { useStepperStore } from "../store/useStepperStore";
import { routes } from "@/lib/constants/_routes";

const OnboardingFooter = ({ stepLength }: { stepLength: number }) => {

  const PERCENTAGE_TO_ADD = 20;
  const currentStepper = useStepperStore((state) => state.currentStep);
  const currentStepProgress = useStepperStore((state) => state.currentStepProgress);
  const { setCurrentStep, setStepProgress } = useStepperStore((state) => state.action);
  
  return (
    <>
      <Divider />
      <div className="p-4 w-full">
        <div className="flex items-center justify-between w-full">
          {currentStepper === 1 ? (
            <Navigate href={routes.student.dashboard} variants="redirect" aria-label="Skip Button">
              Skip for now
            </Navigate>
          ) : (
            <Button
              variants="custom"
              className="p-2"
              aria-label="Previous Button"
              onClick={() => {
                if (currentStepper > 0) {
                  setCurrentStep(currentStepper - 1);
                  setStepProgress(currentStepProgress - PERCENTAGE_TO_ADD);
                }
              }}
            >
              Previous
            </Button>
          )}
          <Button
            className="p-2"
            aria-label="Next Button"
            onClick={() => {
              if (currentStepper <= stepLength - 2) {
                setCurrentStep(currentStepper + 1);
                setStepProgress(currentStepProgress + PERCENTAGE_TO_ADD);
              }
            }}
          >
            {currentStepper === stepLength - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default OnboardingFooter;
