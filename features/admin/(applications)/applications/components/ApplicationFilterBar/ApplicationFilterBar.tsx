import Filter from "@/components/shared/Filter/Filter";
import { CountryData } from "@/data/countryData";
import { DegreeData } from "@/data/degreeData";
import { providerData } from "@/data/providerData";
import { GenericSelect } from "@/types/shared/select.types";

const scholarshipData: GenericSelect[] = [
  {
    label: "Status",
    default: "Status",
  },
  {
    label: "Submitted",
    value: "submitted",
  },
  {
    label: "Preparing",
    value: "preparing",
  },
  {
    label: "Awarded",
    value: "awarded",
  },
];

const ApplicationFilterBar = () => {
  return (
    <Filter
      placeholder="Search by student name, scholarship title, application ID"
      filters={[
        {
          label: "Scholarship Status",
          filterData: scholarshipData,
        },
        {
          label: "Provider",
          filterData: providerData,
        },
        {
          label: "Country",
          filterData: CountryData,
        },
        {
          label: "Degree Level",
          filterData: DegreeData,
        },
      ]}
    />
  );
};

export default ApplicationFilterBar;
