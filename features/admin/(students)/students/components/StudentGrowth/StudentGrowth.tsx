"use client";

import BarChart from "@/components/shared/BarChart/BarChart";
import Card from "@/components/shared/Card/Card";

const StudentGrowth = () => {
  const chartData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
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
    <Card className="p-6 mt-4">
      <h3 className="text-primary tracking-wider text-md mb-4">
        Student Growth
      </h3>
      <BarChart datasetIdKey="id" data={chartData} />
    </Card>
  );
};

export default StudentGrowth;
