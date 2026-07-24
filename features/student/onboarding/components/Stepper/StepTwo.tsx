import FormField from "@/components/ui/FormField/FormField";
import OnboardingContainer from "../OnboardingContainer";
import Label from "@/components/ui/Label/Label";
import Input from "@/components/ui/Input/Input";
import { BiSolidInstitution } from "react-icons/bi";
import Card from "@/components/shared/Card/Card";
import { MdInfo } from "react-icons/md";

const StepTwo = () => {
  return (
    <OnboardingContainer className="w-full p-4">
      <div className="mt-4 text-center">
        <p className="text-4xl tracking-wide text-secondary font-semibold leading-none">
          Academic Background
        </p>
        <p className="text-gray-600 tracking-wide text-md">
          Provide details about your current or most recent studies.
        </p>
      </div>
      <form className="w-full">
        <div className="mt-8 w-full">
          <FormField className="w-full">
            <Label htmlFor="Education Level">Education Level</Label>
            <select className="outline-none border border-[#c5c7cf] p-3 rounded-md leading-none w-full">
              <option defaultValue="Undergraduate">Undergraduate</option>
            </select>
          </FormField>
          <FormField className="w-full">
            <Label htmlFor="institution name">Institution Name</Label>
            <Input
              type="text"
              prefixIcon={BiSolidInstitution}
              placeholder="e.g. Stanford University"
            />
          </FormField>
          <div className="lg:flex grid grid-cols-1 grid-rows-1 w-full gap-2">
            <FormField className="w-full">
              <Label htmlFor="degree type">Degree Type</Label>
              <Input type="text" placeholder="e.g. B.Sc" />
            </FormField>
            <FormField className="w-full">
              <Label htmlFor="Field of Study">Field of Study</Label>
              <Input type="text" placeholder="e.g. Computer Science" />
            </FormField>
          </div>
          <div className="lg:flex grid grid-cols-1 grid-rows-1 w-full gap-2">
            <FormField className="w-full">
              <Label htmlFor="Current Year">Current Year</Label>
              <Input type="text" placeholder="2nd year" />
            </FormField>
            <FormField className="w-full">
              <Label htmlFor="Graduation">Graduation</Label>
              <Input type="text" placeholder="2026" />
            </FormField>
            <FormField className="w-full">
              <Label htmlFor="GPA">GPA</Label>
              <Input type="text" placeholder="3.8/4.0" />
            </FormField>
          </div>
        </div>
      </form>
    </OnboardingContainer>
  );
};

export default StepTwo;
