import FilterBar from "@/components/shared/FilterBar/FilterBar";
import Select from "@/components/ui/Select/Select";
import { accountStatusData } from "../../constants/accountStatusData";
import { countryData } from "../../constants/countryData";

const StudentFilterBar = () => {
  return (
    <FilterBar placeholder="Filter by name, email, or student ID...">
      <Select data={accountStatusData} />
      <Select data={countryData} />
    </FilterBar>
  );
};

export default StudentFilterBar;
