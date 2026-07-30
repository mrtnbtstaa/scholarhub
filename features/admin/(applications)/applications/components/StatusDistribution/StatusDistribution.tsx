"use client";

import DoughnutDistribution from "@/components/shared/DoughnutDistribution/DoughnutDistribution";
import CategoryDistributionItem from "@/components/shared/DoughnutDistribution/CategoryDistributionItem";

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

const StatusDistribution = () => {
  return (
    <div>
      <DoughnutDistribution
        data={chartData}
        headerTitle="STATUS DISTRIBUTION"
        distributionTitle="TOTAL"
        distributionCount={"7.9k"}
      >
        {Array.from({ length: 3 }).map((_, idx) => (
          <CategoryDistributionItem
            key={idx}
            title="Saved"
            percentage={"5.8k"}
            color="bg-secondary"
          />
        ))}
      </DoughnutDistribution>
    </div>
  );
};

export default StatusDistribution;
