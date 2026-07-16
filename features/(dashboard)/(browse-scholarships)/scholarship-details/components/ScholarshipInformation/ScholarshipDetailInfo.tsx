import InfoCard from "./InfoCard";

const ScholarshipDetailInfo = () => {
  return (
    <div className="lg:flex items-center gap-4 flex-wrap grid grid-cols-2 grid-rows-1">
      <InfoCard title="PROVIDER" subTitle="Gov. of Japan" />
      <InfoCard title="OPENS" subTitle="May 1, 2026" />
      <InfoCard title="DEADLIINE" subTitle="Sept 30, 2026" />
      <InfoCard title="RESULTS" subTitle="FEB 2027" />
    </div>
  );
};

export default ScholarshipDetailInfo;
