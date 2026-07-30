import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";

const EligibilityForm = () => {
  return (
    <div className="flex flex-col items-start w-full px-4">
      <div className="flex items-center gap-4 w-full">
        <FormField className="w-full">
          <Label isRequired={true} htmlFor="minimum-gpa-requirement">
            Minimum GPA Requirement
          </Label>
          <Input
            id="minimum-gpa-requirement"
            type="text"
            placeholder="e.g. 3.5"
            required
          />
        </FormField>
        <FormField className="w-full">
          <Label isRequired={true} htmlFor="application-deadline">
            Application Deadline
          </Label>
          <Input id="application-deadline" type="date" required />
        </FormField>
      </div>
      <FormField className="w-full">
        <Label isRequired={true} htmlFor="eligible-nationalities">
          Eligible Nationalities
        </Label>
        <Input
          id="eligible-nationalities"
          type="text"
          placeholder="e.g. ASEAN Countries, Global, Specific Region"
          required
        />
      </FormField>
      <FormField className="w-full">
        <Label isRequired={true} htmlFor="field-of-study">
          Field of Study
        </Label>
        <Input
          id="field-of-study"
          type="text"
          placeholder="e.g. STEM, Social Sciences, All Fields"
          required
        />
      </FormField>
    </div>
  );
};

export default EligibilityForm;
