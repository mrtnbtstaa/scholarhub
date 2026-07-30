import Filter from "@/components/shared/Filter/Filter";
import { DegreeData } from "@/config/degreeData";
import { providerData } from "@/config/providerData";
import { scholarshipStatusData } from "@/config/scholarshipStatusData";

const ScholarshipFilter = () => {
  return (
    <Filter
      placeholder="Search by title, provider or ID"
      filters={[
        {
          label: "Scholarship Status",
          filterData: scholarshipStatusData,
        },
        {
          label: "Degree Level",
          filterData: DegreeData,
        },
        {
          label: "Provider",
          filterData: providerData,
        },
      ]}
    />
  );
};

export default ScholarshipFilter;
