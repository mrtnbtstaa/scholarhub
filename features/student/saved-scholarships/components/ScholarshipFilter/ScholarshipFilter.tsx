import Card from "@/components/shared/Card/Card";
import Select from "@/components/ui/Select/Select";
import { fundingData } from "../../data/funding.data";
import { DegreeData } from "@/data/degreeData";
import { CountryData } from "@/data/countryData";

const ScholarshipFilter = () => {
  return (
    <Card
      className="p-4 border border-[#cbccd4] rounded-2xl flex items-center gap-2"
      variants="custom"
    >
      <Select data={CountryData} />
      <Select data={DegreeData} />
      <Select data={fundingData} />
    </Card>
  );
};

export default ScholarshipFilter;
