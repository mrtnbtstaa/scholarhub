import Card from "@/components/shared/Card/Card";
import PercentageProps from "./MatchesPercentageContent";

const TopMatches = () => {
  return (
    <Card className="p-4 w-full">
      <h2 className="text-secondary text-lg tracking-wider leading-none font-semibold mb-4">
        Top Matches
      </h2>
      <PercentageProps percentage={60} title="Full Tuition"  />
      <PercentageProps percentage={78} title="Research Grants"  />
      <PercentageProps percentage={45} title="Match"  />
    </Card>
  );
};

export default TopMatches;
