import GridAnalyticCards from "@/components/shared/GridAnalyticCards/GridAnalyticCards";
import AnalyticCard from "./AnalyticCard";

const Analytics = () => {
  return (
    <GridAnalyticCards>
      <AnalyticCard title="Total Scholarships" count={"1,248"} />
      <AnalyticCard
        title="Active Students"
        count={"4,248"}
        variants="active-students"
      />
      <AnalyticCard title="Providers" count={"182"} variants="providers" />
      <AnalyticCard
        title="Active Apps"
        count={"7,914"}
        variants="active-apps"
      />
      <AnalyticCard
        title="Pending Reviews"
        count={"18"}
        variants="pending-reviews"
      />
      <AnalyticCard
        title="API Syncs Today"
        count={"96"}
        variants="sync-today"
      />
    </GridAnalyticCards>
  );
};

export default Analytics;
