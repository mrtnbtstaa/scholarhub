"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { defaultOptions } from "./DoughnutOptions";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Title,
);

interface DoughnutProps {
  data: ChartData<"doughnut", number[], string>;
  options?: ChartOptions<"doughnut">;
  datasetIdKey?: string;
}

const DoughnutChart = ({ data, options, datasetIdKey = "id" }: DoughnutProps) => {
  const mergedOptions: ChartOptions<"doughnut"> = {
    ...defaultOptions,
    ...options,
    plugins: {
      ...defaultOptions.plugins,
      ...options?.plugins,
    },
    scales: {
      ...defaultOptions.scales,
      ...options?.scales,
    },
  };

  return (
    <Doughnut datasetIdKey={datasetIdKey} data={data} options={mergedOptions} />
  );
};

export default DoughnutChart;
