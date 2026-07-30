import Filter from "@/components/shared/Filter/Filter";
import { CountryData } from "@/config/countryData";
import { DegreeData } from "@/config/degreeData";
import { providerData } from "@/config/providerData";

const ApplicationFilterBar = () => {
  return (
    <Filter
      placeholder="Search by student name, scholarship title, application ID"
      filters={[
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
