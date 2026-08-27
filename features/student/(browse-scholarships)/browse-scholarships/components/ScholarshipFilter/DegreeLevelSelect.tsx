"use client"
import SelectField from "@/components/shared/SelectField/SelectField";
import { DegreeData } from "@/data/degreeData";
import { useSearchParams } from "next/navigation";

const DegreeLevelSelect = () => {
  const searchParams = useSearchParams();
  const degree = searchParams.get("degree");
  return (
    <div className="mt-8 flex flex-col items-start justify-start gap-2">
      <h2 className="text-xs font-semibold tracking-wider text-gray-700">
        DEGREE LEVEL
      </h2>
      <SelectField className="w-full" paramKey="degree" data={DegreeData}/>
    </div>
  );
};

export default DegreeLevelSelect;
