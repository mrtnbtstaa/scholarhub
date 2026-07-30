import Card from "@/components/shared/Card/Card";
import Input from "@/components/ui/Input/Input";
import Select from "@/components/ui/Select/Select";
import { ApplicationStatusData } from "@/features/student/my-applications/data/applicationStatus.data";
import { MdSearch } from "react-icons/md";

const DocumentFilter = () => {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="Search documents by name, category or scholarship."
          prefixIcon={MdSearch}
          className="p-2"
        />
        <Select data={ApplicationStatusData} className="py-3" />
      </div>
    </Card>
  );
};

export default DocumentFilter;
