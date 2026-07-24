import Card from "@/components/shared/Card/Card";

interface EngagementProps {
  title: "Avg Applications" | "Avg Saved" | "Avg Session" | "Verification Rate";
  value: number | string;
}

const EngagementItem = ({ title, value }: EngagementProps) => {
  return (
    <Card className="p-4 bg-[#e4efff]" variants="custom">
      <h4 className="text-md font-normal tracking-wider">{title}</h4>
      <span className="lg:text-2xl md:text-lg font-semibold tracking-wider">
        {title === "Avg Applications" && value}
        {title === "Avg Saved" && value}
        {title === "Avg Session" && `${value}m`}
        {title === "Verification Rate" && `${value}%`}
      </span>
    </Card>
  );
};

export default EngagementItem;
