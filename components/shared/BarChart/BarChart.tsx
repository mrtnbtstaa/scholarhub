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
import { Bar } from "react-chartjs-2";
import { defaultOptions } from "./barOptions";

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

interface BarProps {
  data: ChartData<"bar", number[], string>;
  options?: ChartOptions<"bar">;
  datasetIdKey?: string;
}

const BarChart = ({ data, options, datasetIdKey = "id" }: BarProps) => {
  const mergedOptions: ChartOptions<"bar"> = {
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
    <Bar datasetIdKey={datasetIdKey} data={data} options={mergedOptions} />
  );
};

export default BarChart;
