"use client";

import OnboardingWelcome from "./components/OnboardingWelcome";
import OnboardingContainer from "./components/OnboardingContainer";
import StepOne from "./components/Stepper/StepOne";
import StepTwo from "./components/Stepper/StepTwo";
import StepThree from "./components/Stepper/StepThree";
import StepFour from "./components/Stepper/StepFour";
import StepFive from "./components/Stepper/StepFive";
import { useStepperStore } from "@/features/(dashboard)/onboarding/store/useStepperStore";
import StepperProgress from "./components/StepperProgress";
import OnboardingHeader from "./components/OnboardingHeader";
import OnboardingFooter from "./components/OnboardingFooter";

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
    <OnboardingContainer>
      <OnboardingHeader />
      {currentStepper != 0 && <StepperProgress />}
      <div className="flex w-full">{ActiveStep && <ActiveStep />}</div>
      {currentStepper !== 0 && <OnboardingFooter stepLength={ONBOARDING_STEPS.length} />}
    </OnboardingContainer>
  );
};

export default OnboardingPage;
