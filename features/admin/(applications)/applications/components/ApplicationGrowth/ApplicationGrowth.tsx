"use client";
import BarChart from "@/components/shared/BarChart/BarChart";
import Card from "@/components/shared/Card/Card";

const ApplicationGrowth = () => {
  const chartData = {
    labels: [
      "Philippines",
      "United Kingdom",
      "United States",
      "Japan",
      "China",
      "Korea",
    ],
    datasets: [
      {
        data: [10, 15, 20, 25, 30, 35],
        fill: false,
        backgroundColor: [
          "#dbeafe",
          "#dbeafe",
          "#dbeafe",
          "#1e3a5f",
          "#1e3a5f",
          "#0f223d",
        ],
        borderRadius: {
          topLeft: 4,
          topRight: 4,
        },
        barPercentage: 0.9,
        categoryPercentage: 1.0,
      },
    ],
  };
  return (
    <Card className="p-6">
      <h3 className="text-secondary tracking-wider text-md mb-4">
        APPLICATION GROWTH TRENDS
      </h3>
        <BarChart minHeight="100px" datasetIdKey="id" data={chartData} />
    </Card>
  );
};

export default ApplicationGrowth;
