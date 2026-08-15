"use client";

import Card from "@/components/shared/Card/Card";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";
import { PriorityData } from "../../data/priorityLevel.data";
import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/helpers/cn";
import { ApplicationStatusData } from "../../data/applicationStatus.data";
import { useState } from "react";

const ApplicationStatus = () => {
  const [currrentPriority, setPriority] = useState<"high" | "medium" | "low">(
    "high",
  );

  return (
    <Card as="section" className="p-4 mt-4">
      <h3 className="text-secondary text-2xl tracking-wider font-semibold">
        Application Setup
      </h3>
      <div className="mt-4 flex items-center gap-4 w-full">
        <div className="w-full">
          <Label
            className="text-md font-normal text-secondary"
            htmlFor="Application status"
          >
            Application Status
          </Label>
          <Select data={ApplicationStatusData} />
        </div>
        <div className="w-full">
          <Label
            className="text-md font-normal text-secondary"
            htmlFor="Target Date"
          >
            Personal Target Date
          </Label>
          <Input type="date" className="p-4 w-full" />
        </div>
      </div>
      <div className="mt-4">
        <Label
          className="text-md font-normal text-secondary mb-2"
          htmlFor="Priority Level"
        >
          Priority Level
        </Label>
        <div className="flex items-center gap-4">
          {PriorityData &&
            PriorityData.map(({ priority, currentPriority }) => (
              <Button
                onClick={() => setPriority(currentPriority)}
                variants="custom"
                className={cn(
                  "p-3 w-full text-md font-semibold tracking-wider",
                  currentPriority === currrentPriority
                    ? "bg-[#1a375c] text-white"
                    : "border border-[#edeff0]",
                )}
                key={priority}
              >
                {priority}
              </Button>
            ))}
        </div>
      </div>
    </Card>
  );
};

export default ApplicationStatus;
