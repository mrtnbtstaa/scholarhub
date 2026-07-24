import SummaryItem from "./SummaryItem";

const SummaryGrid = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-4">
        <SummaryItem headerTitle="LARGEST PROVIDER" subHeader="Japan (MEXT)" summaryCount={84} />
        <SummaryItem headerTitle="FASTEST GROWING" subHeader="KAIST" summaryCount={"+24%"} />
        <SummaryItem headerTitle="MOST VIEWED" subHeader="DAAD" summaryCount={"12k"} />
        <SummaryItem headerTitle="HIGH ENGAGEMENT" subHeader="FulBright" summaryCount="94%" />
    </div>
  );
};

export default SummaryGrid;
