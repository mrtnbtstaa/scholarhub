import ScholarshipCard from "./ScholarshipCard";

const ScholarshipGrid = () => {
  return (
    <div className="flex flex-col w-full flex-1">
      <div className="flex items-start justify-between">
        <p className="text-gray-600 text-md tracking-wide">
          Showing 24 of 186 scholarships
        </p>
        <p className="text-gray-600 text-md tracking-wide">
          Showing 24 of 186 scholarships
        </p>
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
