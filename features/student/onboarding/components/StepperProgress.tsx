import { MdPerson } from "react-icons/md";
import StepperIconProgress from "./StepperIconProgress";
import { ElementType } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdDocument, IoMdGlobe } from "react-icons/io";
import { GiFinishLine } from "react-icons/gi";
import LineProgress from "@/components/shared/LineProgress/LineProgress";
import { useStepperStore } from "../store/useStepperStore";

type StepperIcon = { stepperIcon: ElementType, tooltip: string };
const progressIcons: StepperIcon[] = [
  { stepperIcon: MdPerson,
    tooltip: "Personal Information"
   },
  { stepperIcon: FaGraduationCap,
    tooltip: "Academic Education"
   },
  { stepperIcon: IoMdGlobe,
    tooltip: "Preferences"
   },
  { stepperIcon: IoMdDocument,
    tooltip: "Documents"
   },
  { stepperIcon: GiFinishLine,
    tooltip: "Finish"
   },
];

const StepperProgress = () => {
  const currentStep = useStepperStore((state) => state.currentStep);
  const currentStepProgress = useStepperStore(
    (state) => state.currentStepProgress,
  );

  return (
    <div className="mt-2 w-full p-2">
      <LineProgress percentage={currentStepProgress} className="bg-primary" />
      <div className="flex items-center justify-between mt-4 ">
        {progressIcons &&
          progressIcons.map((icon, index) => {

            const isActive = currentStep === index + 1;
            const isCompleted = index < currentStep;

            return (
              <StepperIconProgress
              className="absolute -top-10"
              tooltip={icon.tooltip}
                key={index}
                icon={icon.stepperIcon}
                currentStep={isActive || isCompleted}
              />
            );
          })}
      </div>
    </div>
  );
};

export default StepperProgress;
