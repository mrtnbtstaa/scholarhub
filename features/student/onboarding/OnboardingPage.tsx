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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="mx-auto my-auto md:min-w-[50%] min-w-full h-fit flex flex-col items-center justify-center">
        <OnboardingHeader />
        {currentStepper != 0 && <StepperProgress />}
        <div className="flex w-full">{ActiveStep && <ActiveStep />}</div>
        {currentStepper !== 0 && (
          <OnboardingFooter stepLength={ONBOARDING_STEPS.length} />
        )}
      </Card>
    </div>
  );
};

export default OnboardingPage;
