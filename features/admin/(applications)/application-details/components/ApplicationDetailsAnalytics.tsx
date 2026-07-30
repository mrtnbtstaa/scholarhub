import Card from "@/components/shared/Card/Card";
import LineProgress from "@/components/shared/LineProgress/LineProgress";

const ApplicationDetailsAnalytics = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 grid-rows-1 gap-4 w-full">
      <Card className="p-4 w-full">
        <h4 className="text-xs font-semibold tracking-wider text-gray-700">
          PROGRESS
        </h4>
        <span className="text-secondary text-2xl font-medium tracking-wider">
          70%
        </span>
        <div className="mt-2">
          <LineProgress percentage={70} className="bg-secondary" />
        </div>
      </Card>
      <Card
        className="p-4 bg-[#fedbd6] w-full flex flex-col items-start"
        variants="custom"
      >
        <h4 className="text-xs font-semibold tracking-wider text-[#d25a47]">
          DEADLINE IN
        </h4>
        <span className="text-[#c24633] text-2xl font-medium tracking-wider">
          5 Days
        </span>
        <span className="text-md tracking-wider text-[#be4a38]">
          Action Required
        </span>
      </Card>
      <Card className="p-4 flex flex-col w-full items-start">
        <h4 className="text-xs font-semibold tracking-wider text-gray-700">
          DOCUMENTS
        </h4>
        <span className="text-secondary text-2xl font-semibold tracking-wider">
          3 / 6
        </span>
        <span className="text-md tracking-wider text-secondary">
          50% Completed
        </span>
      </Card>
      <Card className="p-4 flex flex-col w-full items-start">
        <h4 className="text-xs font-semibold tracking-wider text-gray-700">
          TASKS
        </h4>
        <span className="text-secondary text-2xl font-semibold tracking-wider">
          2 / 5
        </span>
        <span className="text-md tracking-wider text-secondary">3 Pending</span>
      </Card>
    </div>
  );
};

export default ApplicationDetailsAnalytics;
