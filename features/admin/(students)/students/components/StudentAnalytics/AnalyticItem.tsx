import Card from "@/components/shared/Card/Card";

const AnalyticItem = ({
  title,
  count,
}: {
  title: string;
  count: string | number;
}) => {
  return (
    <Card className="p-4 flex items-center justify-between w-full">
      <h4 className="text-md tracking-wider text-gray-800">{title}</h4>
      <span className="md:text-2xl text-lg font-semibold tracking-wider">{count}</span>
    </Card>
  );
};

export default AnalyticItem;
