import CategoryDistributionItem from "@/components/shared/DoughnutDistribution/CategoryDistributionItem";
import DoughnutDistribution from "@/components/shared/DoughnutDistribution/DoughnutDistribution";

const chartData = {
  labels: [],
  datasets: [
    {
      label: "Status Overview",
      data: [6, 3, 3],
      backgroundColor: ["#012145", "#01a73e", "#145dfd"],
      borderWidth: 0,
    },
  ],
};

const PlatformDistribution = () => {
  return (
    <DoughnutDistribution
      headerTitle="Platform Distribution"
      data={chartData}
      distributionCount={"1.2k"}
      distributionTitle="Scholarships"
      className="md:mt-4"
    >
      {Array.from({ length: 3 }).map((_, idx) => (
        <CategoryDistributionItem
        key={idx}
          color="bg-blue-600"
          title="Medicine"
          percentage={35}
        />
      ))}
    </DoughnutDistribution>
  );
};

export default PlatformDistribution;
