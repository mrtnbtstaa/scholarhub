import { LuListFilter } from "react-icons/lu";
import ScholarshipSearch from "./ScholarshipSearch";
import ScholarshipCountrySelect from "./ScholarshipCountrySelect";
import DegreeLevelSelect from "./DegreeLevelSelect";

const ScholarshipFilter = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-2">
        <LuListFilter className="text-2xl" />
        <h2 className="text-secondary text-md tracking-wide font-semibold">
          Filters
        </h2>
      </div>  
      <ScholarshipSearch />
      <ScholarshipCountrySelect />
      <DegreeLevelSelect />
    </div>
  );
};

export default ScholarshipFilter;
