"use client";

import { useState } from "react";
import ApplicationDetails from "./ApplicationDetails";
import TabNavigation from "./TabNavigation";
import { NavigationIndex } from "../types/tabNavigation";
import BasicInformation from "./BasicInformation";
import EligibilityBenefits from "./EligibilityBenefits";
import MediaResources from "./MediaResources";
import SeoPublishing from "./SeoPublishing";
import Card from "@/components/shared/Card/Card";
import TextArea from "@/components/ui/TextArea/TextArea";
import FormField from "@/components/ui/FormField/FormField";
import Label from "@/components/ui/Label/Label";

const tabContent = [
  BasicInformation,
  EligibilityBenefits,
  ApplicationDetails,
  MediaResources,
  SeoPublishing,
];

const ScholarshipForm = () => {
  const [currentNavigationIdx, setcurrentNavigationIdx] =
    useState<NavigationIndex>(0);
  const ActiveTabContent = tabContent[currentNavigationIdx];
  return (
    <>
      <TabNavigation
        currentNavigationIdx={currentNavigationIdx}
        setCurrentNavigation={setcurrentNavigationIdx}
      />
      <form className="mt-4">
        <ActiveTabContent />
        <Card className="p-4 my-4">
          <FormField>
            <Label htmlFor="Scholarship Description">
              Scholarship Description
            </Label>
            <TextArea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore culpa ex, porro perferendis dolor voluptas itaque molestias sapiente voluptatum enim ipsa distinctio iure architecto cum, est blanditiis temporibus alias eaque." />
          </FormField>
          <FormField>
            <Label htmlFor="Short Summary">
              Short Summary
            </Label>
            <TextArea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore culpa ex, porro perferendis dolor voluptas itaque molestias sapiente voluptatum enim ipsa distinctio iure architecto cum, est blanditiis temporibus alias eaque." />
          </FormField>
        </Card>
      </form>
    </>
  );
};

export default ScholarshipForm;
