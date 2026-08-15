import Card from "@/components/shared/Card/Card";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";
import { CountryData } from "@/data/countryData";
import { DegreeData } from "@/data/degreeData";

const BasicInformation = () => {
  return (
    <Card className="p-4">
      <FormField>
        <Label htmlFor="scholarship title">Scholarship Title</Label>
        <Input placeholder="Mext Undergraduate Scholarship" />
      </FormField>
      <div className="flex items-center w-full gap-4">
        <FormField className="w-full">
          <Label htmlFor="provider">Provider</Label>
          <Input placeholder="Government of Japan" />
        </FormField>
        <FormField className="w-full">
          <Label htmlFor="scholarship title">Scholarship Title</Label>
          <Select data={CountryData} />
        </FormField>
      </div>
      <div className="flex items-center w-full gap-4">
        <FormField className="w-full">
          <Label htmlFor="country">Country</Label>
          <Input placeholder="Government of Japan" />
        </FormField>
        <FormField className="w-full">
          <Label htmlFor="degree level">Degree Level</Label>
          <Select data={DegreeData} />
        </FormField>
      </div>
      <FormField>
        <Label htmlFor="scholarship title">Field of Study</Label>
        <Input placeholder="Add More..." />
      </FormField>
    </Card>
  );
};

export default BasicInformation;
