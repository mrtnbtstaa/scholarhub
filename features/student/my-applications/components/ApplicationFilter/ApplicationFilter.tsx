import Card from "@/components/shared/Card/Card";
import Input from "@/components/ui/Input/Input";
import Select from "@/components/ui/Select/Select";
import { MdSearch } from "react-icons/md";
import { ApplicationStatusData } from "../../data/applicationStatus.data";
import { ApplicationDeadlineData } from "../../data/applicationDeadline.data";

const ApplicationFilter = () => {
  return (
    <Card
      className="mt-4 p-4 border border-[#d7d8e0] rounded-lg flex items-center md:flex-row flex-col gap-4"
      variants="custom"
    >
      <Input
        placeholder="Search by name, country..."
        className="p-3 w-full"
        prefixIcon={MdSearch}
      />
      <Select className="md:w-[30%] w-full" data={ApplicationStatusData} />
      <Select className="md:w-[30%] w-full" data={ApplicationDeadlineData} />
    </Card>
  );
};

export default ApplicationFilter;
