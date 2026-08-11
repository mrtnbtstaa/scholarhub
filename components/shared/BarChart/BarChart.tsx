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
  minHeight?: string;
  width?: string;
  height?: string;
}

const BarChart = ({
  data,
  options,
  datasetIdKey = "id",
  minHeight,
  width = "100%",
  height = "100%",
}: BarProps) => {
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
    <div
      style={{
        position: "relative",
        minHeight: minHeight,
        width: width,
        height: height,
      }}
    >
      <Bar datasetIdKey={datasetIdKey} data={data} options={mergedOptions} />
    </div>
  );
};

export default BarChart;
