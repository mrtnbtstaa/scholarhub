import Card from "@/components/shared/Card/Card";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";
import { GenericSelect } from "@/types/select.types";

const tuitionSelectData: GenericSelect[] = [
  {
    label: "100% Full Waiver",
    value: "full waiver",
  },
  {
    label: "50% Partial Waiver",
    value: "partial waiver",
  },
  {
    label: "Fixed Amount Grant",
    value: "fixed amount grant",
  },
];

const EligibilityBenefits = () => {
  return (
    <Card className="p-4">
      <div className="flex items-center w-full gap-4">
        <FormField className="w-full">
          <Label htmlFor="Minimum GPA">Minimum GPA</Label>
          <Input placeholder="3.5 / 4.0" />
        </FormField>
        <FormField className="w-full">
          <Label htmlFor="Monthly Stipend">Monthly Stipend</Label>
          <Input placeholder="117,000" />
        </FormField>
      </div>
      <div className="flex items-center w-full gap-4">
        <FormField className="w-full">
          <Label htmlFor="Nationality Constraints">
            Nationality Constraints
          </Label>
          <Input
            placeholder="Must be a citizen of a country that has diplomatic relations with Japan."
          
          />
        </FormField>
        <FormField className="w-full">
          <Label htmlFor="Tuition Coverage">Tuition Coverage</Label>
          <Select data={tuitionSelectData} />
        </FormField>
      </div>
    </Card>
  );
};

export default EligibilityBenefits;
