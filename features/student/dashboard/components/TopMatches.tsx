import Card from "@/components/shared/Card/Card";
import LineProgress from "@/components/shared/LineProgress/LineProgress";

const TopMatches = () => {
  return (
    <Card className="p-4 w-full">
      <h2 className="text-primary text-lg tracking-wider leading-none font-semibold mb-4">
        Top Matches
      </h2>
      <div className="my-4 w-full">
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between w-full">
            <h3>Full Tuition</h3>
            <span className="text-primary font-bold text-sm">60% Match</span>
          </div>
          <LineProgress percentage={60} className="bg-secondary" />
        </div>
      </div>
      <div className="my-4 w-full">
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between w-full">
            <h3>Research Grants</h3>
            <span className="text-primary font-bold text-sm">45% Match</span>
          </div>
          <LineProgress percentage={60} className="bg-secondary" />
        </div>
      </div>
      <div className="my-4 w-full">
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between w-full">
            <h3>Match</h3>
            <span className="text-primary font-bold text-sm">45% Match</span>
          </div>
          <LineProgress percentage={60} className="bg-secondary" />
        </div>
      </div>
    </Card>
  );
};

export default TopMatches;
