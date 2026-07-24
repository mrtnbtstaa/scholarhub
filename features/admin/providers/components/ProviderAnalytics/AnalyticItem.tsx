import Card from "@/components/shared/Card/Card";

const AnalyticItem = ({title, count}: {title: string, count: string | number}) => {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-gray-800 md:text-md text-sm tracking-wider">{title}</h4>
        <span className="lg:text-3xl md:text-2xl text-lg tracking-wider font-semibold">{count}</span>
      </div>
    </Card>
  );
};

export default AnalyticItem;
