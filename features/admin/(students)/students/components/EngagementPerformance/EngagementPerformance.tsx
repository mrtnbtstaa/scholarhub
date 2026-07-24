import Card from "@/components/shared/Card/Card";
import EngagementItem from "./EngagementItem";

const EngagementPerformance = () => {
  return (
    <Card className="p-4 my-4">
      <h3>Engagement Performance</h3>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-rows-1 gap-4 py-4">
        <EngagementItem title="Avg Applications" value={"6.8"} />
        <EngagementItem title="Avg Saved" value={"15.2"} />
        <EngagementItem title="Avg Session" value={12} />
        <EngagementItem title="Verification Rate" value={"96.5"} />
      </div>
    </Card>
  );
};

export default EngagementPerformance;
