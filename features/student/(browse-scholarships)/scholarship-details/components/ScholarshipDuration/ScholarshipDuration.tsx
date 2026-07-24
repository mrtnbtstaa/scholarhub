import Card from "@/components/shared/Card/Card";
import ScholarshipTime from "./ScholarshipTime";

const ScholarshipDuration = () => {
  return (
    <Card
      className="mt-8 p-8 flex items-center justify-between bg-[#002045]"
      variants="custom"
    >
      <div>
        <span className="text-white font-semibold text-2xl tracking-widest">
          Time is running out!
        </span>
        <p className="text-gray-300 tracking-wide text-md font-medium">
          You have 5 days left to submit your document package.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <ScholarshipTime time={5} timeInName="DAYS" />
        <ScholarshipTime time={14} timeInName="HRS" />
        <ScholarshipTime time={32} timeInName="MINS" />
      </div>
    </Card>
  );
};

export default ScholarshipDuration;
