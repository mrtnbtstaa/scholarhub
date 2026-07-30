import Select from "@/components/ui/Select/Select";
import { DegreeData } from "@/config/degreeData";

const DegreeLevelSelect = () => {
  return (
    <div className="mt-8 flex flex-col items-start justify-start gap-2">
      <h2 className="text-xs font-semibold tracking-wider text-gray-700">
        DEGREE LEVEL
      </h2>
      <Select data={DegreeData}></Select>
    </div>
  );
};

export default DegreeLevelSelect;
