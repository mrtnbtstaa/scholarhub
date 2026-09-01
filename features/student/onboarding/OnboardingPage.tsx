"use client";

import OnboardingWelcome from "./components/OnboardingWelcome";
import StepOne from "./components/Stepper/StepOne";
import StepTwo from "./components/Stepper/StepTwo";
import StepThree from "./components/Stepper/StepThree";
import StepFour from "./components/Stepper/StepFour";
import StepFive from "./components/Stepper/StepFive";
import StepperProgress from "./components/StepperProgress";
import OnboardingHeader from "./components/OnboardingHeader";
import OnboardingFooter from "./components/OnboardingFooter";
import { useStepperStore } from "./store/useStepperStore";
import Card from "@/components/shared/Card/Card";

const ONBOARDING_STEPS = [
  OnboardingWelcome,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
];

const OnboardingPage = () => {
  const currentStepper = useStepperStore((state) => state.currentStep);
  const ActiveStep = ONBOARDING_STEPS[currentStepper];

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Card className="border p-4 relative border-gray-100 shadow-gray-300 shadow-lg mx-auto  w-[55%] min-h-[90vh] flex flex-col items-center justify-between">
         <div className="flex flex-col w-full">
           <OnboardingHeader />
            {currentStepper != 0 && <StepperProgress />}
         </div>
         <div className="flex w-full">
            <div className="flex flex-col w-full">
                <div className="flex w-full">{ActiveStep && <ActiveStep />}</div>
            </div>
         </div>
          {currentStepper !== 0 && (
            <OnboardingFooter stepLength={ONBOARDING_STEPS.length} />
          )}
      </Card>
    </div>
  );
};

export default OnboardingPage;
