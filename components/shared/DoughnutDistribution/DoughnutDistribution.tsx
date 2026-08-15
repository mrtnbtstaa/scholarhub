import Card from "@/components/shared/Card/Card";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import { cn } from "@/lib/helpers/cn";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DistributionProps {
  headerTitle: string;
  data: ChartData<"doughnut", number[], string>;
  options?: ChartOptions<"doughnut">;
  distributionCount?: string | number;
  distributionTitle?: string;
  children?: React.ReactNode;
  className?: string;
}

const DoughnutDistribution = ({
  headerTitle,
  data,
  options,
  distributionCount,
  distributionTitle,
  children,
  className
}: DistributionProps) => {
  return (
    <Card className={
      cn(
        "p-6",
        className
      )
    }>
      <h3 className="text-secondary tracking-wider font-semibold text-md mb-4">
        {headerTitle}
      </h3>
      <div className="relative w-64 mx-auto">
        <DoughnutChart data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xl font-bold text-[#002045]">
            {distributionCount}
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
            {distributionTitle}
          </span>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-start gap-2 w-full">
        {children}
      </div>
    </Card>
  );
};

export default DoughnutDistribution;
