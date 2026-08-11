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
import { Line } from "react-chartjs-2";
import { defaultOptions } from "./lineOptions";

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

interface LineProps {
  data: ChartData<"line", number[], string>;
  options?: ChartOptions<"line">;
  datasetIdKey?: string;
  minHeight?: string;
  width?: string;
  height?: string;
}

const LineChart = ({
  data,
  options,
  datasetIdKey = "id",
  minHeight,
  width = "100%",
  height = "100%",
}: LineProps) => {
  const mergedOptions: ChartOptions<"line"> = {
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
        width: width,
        height: height,
        minHeight: minHeight,
      }}
    >
      <Line datasetIdKey={datasetIdKey} data={data} options={mergedOptions} />
    </div>
  );
};

export default LineChart;
