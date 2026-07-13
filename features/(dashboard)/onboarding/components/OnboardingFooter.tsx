import Divider from "@/components/shared/Divider/Divider";
import Button from "@/components/ui/Button/Button";
import Navigate from "@/components/ui/Navigate/Navigate";
import { useStepperStore } from "@/store/useStepperStore";

const OnboardingFooter = ({ stepLength }: { stepLength: number }) => {
  const currentStepper = useStepperStore((state) => state.currentStep);
  return (
    <>
      <Divider />
      <div className="flex items-center justify-between w-full mx-4">
        {currentStepper === 1 ? (
          <Navigate href={"/"} variants="redirect" aria-label="Skip Button">
            Skip for now
          </Navigate>
        ) : (
          <Button className="p-2" aria-label="Previous Button">
            Previous
          </Button>
        )}
        <Button className="p-2" aria-label="Next Button">
          {currentStepper === stepLength - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </>
  );
};

export default OnboardingFooter;
