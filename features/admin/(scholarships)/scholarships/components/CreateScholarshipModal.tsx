"use client";

import Divider from "@/components/shared/Divider/Divider";
import Modal from "@/components/shared/Modal/Modal";
import BasicInfoForm from "./form/BasicInfoForm";
import Button from "@/components/ui/Button/Button";
import EligibilityForm from "./form/EligibilityForm";
import DetailsForm from "./form/DetailsForm";
import { useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/cn";
import { MdCheck } from "react-icons/md";
import { useGSAP } from "@gsap/react";

type StepperHeaderProps = {
  count: number;
  title: string;
};

const stepperIndicators: StepperHeaderProps[] = [
  { count: 1, title: "BASIC INFO" },
  { count: 2, title: "ELIGIBILITY" },
  { count: 3, title: "DETAILS" },
];

const stepperForms = [BasicInfoForm, EligibilityForm, DetailsForm];

const CreateScholarshipModal = () => {
  const [stepperIndex, setStepperIndex] = useState<number>(0);
  const formRef = useRef<HTMLDivElement>(null);
  const ActiveForm = stepperForms[stepperIndex];

  useGSAP(() => {
    gsap.fromTo(
      formRef.current,
      {opacity: 0, y: 24},
      {opacity: 1, y: 0, duration: 0.35, ease: "power2.out"},
    )
  }, [stepperIndex])

  return (
    <Modal modalTitle="Create New Scholarship" ButtonLabel="Next Step">
      <Divider />
      <div className="flex items-center justify-center mt-4 px-4">
        <div className="flex items-center justify-between w-full">
          {stepperIndicators.map(({ count, title }) => {
            // Check if this specific step is active
            const isActive = count === stepperIndex + 1;
            // Mark previous step as completed
            const isCompleted = count < stepperIndex + 1;

            return (
              <div
                key={title}
                className="flex flex-col gap-1 items-center relative"
              >
                {count !== stepperIndicators.length && (
                  <div
                    className={cn(
                      "w-full h-0.5 absolute top-5 left-full",
                      isCompleted ? "bg-btn-primary" : "bg-[#e9f1fe]",
                    )}
                  ></div>
                )}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    isActive || isCompleted ? "bg-btn-primary" : "bg-[#e9f1fe]",
                  )}
                >
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      isActive ? " text-white" : "text-gray-400",
                    )}
                  >
                    {!isCompleted ? (
                      count
                    ) : (
                      <MdCheck className="text-md text-white" />
                    )}
                  </span>
                </div>
                <p className="text-xs tracking-wider font-semibold">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <form className="my-4">
        <div ref={formRef}>
          <ActiveForm />
        </div>
      </form>
      <Divider />
      <footer
        className={cn(
          "flex items-center p-4 bg-[#eff5fe] rounded-b-lg",
          stepperIndex === 0 ? "justify-end" : "justify-between",
        )}
      >
        {stepperIndex > 0 && (
          <Button
            onClick={() => setStepperIndex((index) => index - 1)}
            type="button"
            variants="custom"
            className="text-md text-btn-primary tracking-wider rounded-lg p-2"
          >
            Back
          </Button>
        )}
        <Button
          onClick={() => {
            if (stepperIndex < stepperForms.length - 1) {
              setStepperIndex((index) => index + 1);
            }
          }}
          className="p-2 text-md tracking-wider"
          type="button"
        >
          {stepperIndex !== stepperIndicators.length - 1 ? "Next" : "Publish"}
        </Button>
      </footer>
    </Modal>
  );
};

export default CreateScholarshipModal;
