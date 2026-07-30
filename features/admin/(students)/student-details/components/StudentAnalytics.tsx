"use client";

import BarChart from "@/components/shared/BarChart/BarChart";
import Card from "@/components/shared/Card/Card";

const StudentAnalytics = () => {
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
    <Card className="p-4 mt-4">
      <h3>Student Analytics</h3>
      <div className="my-4 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        <Card
          variants="custom"
          className="bg-[#f8f9ff] p-2 flex items-center justify-center flex-col"
        >
          <h4 className="text-md tracking-wider">Avg Session</h4>
          <span className="text-2xl font-semibold tracking-wider text-secondary">
            13 min
          </span>
        </Card>
        <Card
          variants="custom"
          className="bg-[#f8f9ff] p-2 flex items-center justify-center flex-col"
        >
          <h4 className="text-md tracking-wider">Items Viewed</h4>
          <span className="text-2xl font-semibold tracking-wider text-secondary">
            241
          </span>
        </Card>
        <Card
          variants="custom"
          className="bg-[#f8f9ff] p-2 flex items-center justify-center flex-col"
        >
          <h4 className="text-md tracking-wider">Total Searches</h4>
          <span className="text-2xl font-semibold tracking-wider text-secondary">
            88
          </span>
        </Card>
        <Card
          variants="custom"
          className="bg-[#f8f9ff] p-2 flex items-center justify-center flex-col"
        >
          <h4 className="text-md tracking-wider">Conversion</h4>
          <span className="text-2xl font-semibold tracking-wider text-secondary">
            43%
          </span>
        </Card>
      </div>
      <BarChart data={chartData}/>
    </Card>
  );
};

export default StudentAnalytics;
