import { LuAlarmClock, LuBadgeCheck, LuBookmark, LuHistory } from "react-icons/lu";
import ScholarshipAnalyticCard from "./ScholarshipAnalyticCard";

const ScholarshipAnalytic = () => {
  return (
    <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols 1 grid-rows-1 gap-4">
      <ScholarshipAnalyticCard
        icon={LuBookmark}
        subTitle="Total"
        count={18}
        title="Saved Scholarship"
      />
      <ScholarshipAnalyticCard
        icon={LuAlarmClock}
        subTitle="Urgent"
        count={3}
        title="Closing Soon"
        variants="urgent"
      />
      <ScholarshipAnalyticCard
        icon={LuBadgeCheck}
        subTitle="Ready"
        count={5}
        title="Ready to Apply"
        variants="ready"
      />
      <ScholarshipAnalyticCard
        icon={LuHistory}
        subTitle="New"
        count={4}
        title="Recently Saved"
        variants="new"
      />
    </div>
  );
};

export default ScholarshipAnalytic;
