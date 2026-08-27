"use client";

import Card from "@/components/shared/Card/Card";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["In Progress", "Submitted", "Saved/Drafts"],
  datasets: [
    {
      label: "Status Overview",
      data: [6, 3, 3],
      backgroundColor: ["#002045", "#006c49", "#dde8ff"],
    },
  ],
};

const StatusOverview = () => {
  return (
    <Card as="section" className="p-4 w-full h-full">
      <h2 className="text-primary text-lg tracking-wider leading-none font-semibold mb-4">
        Application Status Overview
      </h2>
      <Doughnut data={chartData} />
    </Card>
  );
};
export default StatusOverview;
