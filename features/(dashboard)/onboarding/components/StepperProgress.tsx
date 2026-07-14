import { MdPerson } from "react-icons/md";
import StepperIconProgress from "./StepperIconProgress";
import { useStepperStore } from "@/features/(dashboard)/onboarding/store/useStepperStore";
import { ElementType } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdDocument, IoMdGlobe } from "react-icons/io";
import { GiFinishLine } from "react-icons/gi";

type StepperIcon = { stepperIcon: ElementType };
const progressIcons: StepperIcon[] = [
  { stepperIcon: MdPerson },
  { stepperIcon: FaGraduationCap },
  { stepperIcon: IoMdGlobe },
  { stepperIcon: IoMdDocument },
  { stepperIcon: GiFinishLine },
];

const StepperProgress = () => {
  const currentStep = useStepperStore((state) => state.currentStep);
  const currentStepPrgoress = useStepperStore(
    (state) => state.currentStepProgress,
  );

  return (
    <div className="mt-2 w-full p-2">
      <div className="bg-[#e4efff] w-full h-2 rounded-full">
        <div
          className="w-full h-2 bg-[#6df9bb] rounded-full"
          style={{ width: `${currentStepPrgoress}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-between mt-4">
        {progressIcons && progressIcons.map((icon, index) => (
          <StepperIconProgress
            key={index}
            icon={icon.stepperIcon}
            isCurrentStep={currentStep === index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default StepperProgress;
