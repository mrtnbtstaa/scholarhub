import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";
import TextArea from "@/components/ui/TextArea/TextArea";
import { DegreeData } from "@/data/degreeData";
import { fundingData } from "@/features/student/saved-scholarships/data/funding.data";

const BasicInfoForm = () => {
  return (
    <div className="flex flex-col items-start w-full px-4">
      <FormField className="w-full">
        <Label isRequired={true} htmlFor="scholarship-title">Scholarship Title</Label>
        <Input
          id="scholarship-title"
          type="text"
          placeholder="e.g. Global Excellence Award 2025"
          required
        />
      </FormField>
      <div className="flex items-center gap-4 w-full">
        <FormField className="w-full">
          <Label isRequired={true} htmlFor="education-level">Education Level</Label>
          <Select id="education-level" data={DegreeData} />
        </FormField>
        <FormField className="w-full">
          <Label isRequired={true} htmlFor="funding-type">Funding Type</Label>
          <Select id="funding-type" data={fundingData} />
        </FormField>
      </div>
      <FormField className="w-full">
        <Label isRequired={true} htmlFor="description">Description</Label>
        <TextArea id="description" placeholder="Describe the scholarhip's purpose and impact..." />
      </FormField>
    </div>
  );
};

export default BasicInfoForm;
