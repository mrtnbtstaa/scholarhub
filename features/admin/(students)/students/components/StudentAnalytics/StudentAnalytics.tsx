import GridAnalyticCards from "@/components/shared/GridAnalyticCards/GridAnalyticCards";
import AnalyticItem from "./AnalyticItem";

const StudentAnalytics = () => {
  return (
    <GridAnalyticCards>
      <AnalyticItem title="Total Students" count={"4,286"} />
      <AnalyticItem title="Active Users" count={"4,286"} />
      <AnalyticItem title="Pending" count={"4,286"} />
      <AnalyticItem title="Suspended" count={"4,286"} />
      <AnalyticItem title="New Month" count={"4,286"} />
      <AnalyticItem title="DAU" count={"4,286"} />
    </GridAnalyticCards>
  );
};

export default StudentAnalytics;
