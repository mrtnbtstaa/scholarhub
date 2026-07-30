import Filter from "@/components/shared/Filter/Filter";
import { accountStatusData } from "../../constants/accountStatusData";
import { CountryData } from "../../../../../../config/countryData";

const StudentFilterBar = () => {
  return (
    <Filter
      placeholder="Filter by name, email, or student ID..."
      filters={[
        {
          label: "Account Status",
          filterData: accountStatusData,
        },
        {
          label: "Country",
          filterData: CountryData,
        },
      ]}
    />
  );
};

export default StudentFilterBar;
