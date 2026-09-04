import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import { BiSolidInstitution } from "react-icons/bi";
import SelectField from "@/components/shared/SelectField/SelectField";
import { DegreeOptionsByLevel, EducationLevelData } from "@/data/educationLevelData";
import { useOnboardingStore } from "@/store/useOnboardDraftStore";
import { Label } from "@/components/ui/label";
import { EducationLevel } from "@/types/onboarding/onboarding";

const StepTwo = () => {
  const {draft, updateField} = useOnboardingStore()
  //get the selected education level from the onboardingstore
  const educationLevel = useOnboardingStore((state) => state.draft.education_level)
  //get the degree options based on the selected education level
  const degreeOptions = educationLevel ? DegreeOptionsByLevel[educationLevel] : [];

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <div className="mt-4 text-center">
        <p className="text-4xl tracking-wide text-primary font-semibold leading-none">
          Academic Background
        </p>
        <p className="text-gray-600 tracking-wide text-md">
          Provide details about your current or most recent studies.
        </p>
      </div>
      <form  className="w-full">
        <div className="mt-8 w-full">
         <div className="flex gap-2">
            <FormField className="w-full">
              <Label htmlFor="Education Level">Education Level</Label>
              <SelectField
                variant="tertiary"
                placeholder="Select Education Level"
                onChange={(value) => 
                {
                  updateField("education_level", value as EducationLevel ); 
                  updateField("degree", "");
                }}
                data={EducationLevelData}
                value={draft.education_level ?? ""}
                className="leading-none w-full">
              </SelectField>
            </FormField>
            <FormField className="w-full">
              <Label htmlFor="institution name">Institution Name</Label>
              <Input
                variant="tertiary"
                type="text"
                prefixIcon={BiSolidInstitution}
                placeholder="e.g. Stanford University"
              />
            </FormField>
         </div>
          <div className="lg:flex grid grid-cols-1 grid-rows-1 w-full gap-2">
            <FormField className="w-full">
              <Label htmlFor="degree type">Degree Type</Label>
              {/* <Input variant="tertiary" type="text" placeholder="e.g. B.Sc" /> */}
                <SelectField
                  className="w-full"
                  disabled={!educationLevel}
                  variant="tertiary"
                  value={draft.degree ?? ""}
                  placeholder="Select Degree Type"
                  onChange={(value) => updateField("degree", value as string)}
                  data={degreeOptions}
                />
            
            </FormField>
            <FormField className="w-full">
              <Label htmlFor="Field of Study">Field of Study</Label>
              <Input variant="tertiary" type="text" placeholder="e.g. Computer Science" />
            </FormField>
          </div>
          <div className="lg:flex grid grid-cols-1 grid-rows-1 w-full gap-2">
            <FormField className="w-full">
              <Label htmlFor="Current Year">Current Year</Label>
              <Input variant="tertiary" type="text" placeholder="2nd year" />
            </FormField>
            <FormField className="w-full">
              <Label htmlFor="Graduation">Graduation</Label>
              <Input variant="tertiary" type="text" placeholder="2026" />
            </FormField>
            <FormField className="w-full">
              <Label htmlFor="GPA">GPA</Label>
              <Input variant="tertiary" type="text" placeholder="3.8/4.0" />
            </FormField>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
