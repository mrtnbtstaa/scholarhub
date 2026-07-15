import LineProgress from "@/components/shared/LineProgress/LineProgress";

interface PercentageProps {
  percentage: number;
  title: string;
}

const PercentageProps = ({ percentage, title }: PercentageProps) => {
  return (
    <div className="my-4 w-full">
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <h3 className="">{title}</h3>
          <span className="text-secondary font-bold text-sm">
            {percentage}% Match
          </span>
        </div>
        <LineProgress percentage={percentage} className="bg-secondary" />
      </div>
    </div>
  );
};

export default PercentageProps;
