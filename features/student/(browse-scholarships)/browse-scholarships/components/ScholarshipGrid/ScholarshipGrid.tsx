import Select from "@/components/ui/Select/Select";
import ScholarshipCard from "./ScholarshipCard";
import { DegreeData } from "@/config/degreeData";

const ScholarshipGrid = () => {
  return (
    <div className="flex flex-col w-full flex-1">
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-md tracking-wide">
          Showing 24 of 186 scholarships
        </p>
        <div className="inline-flex items-center gap-2">
          <span className="text-gray-700 font-semibold text-xs tracking-wide whitespace-nowrap">SORT BY:</span>
          <Select variants="default" data={DegreeData} />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-3">
        <ScholarshipCard />
        <ScholarshipCard />
        <ScholarshipCard />
        <ScholarshipCard />
        <ScholarshipCard />
        <ScholarshipCard />
      </div>
    </div>
  );
};

export default ScholarshipGrid;
