import { create } from "zustand";

interface StepperState {
  currentStep: number;
  currentStepProgress: number;
  action: {
    setStepProgress: (value: number) => void;
    setCurrentStep: (value: number) => void;
  };
}
export const useStepperStore = create<StepperState>((set) => ({
  currentStep: 0,
  currentStepProgress: 0,
  action: {
    setCurrentStep: (value) => set({ currentStep: value }),
    setStepProgress: (value) => set({ currentStepProgress: value }),
  },
}));
