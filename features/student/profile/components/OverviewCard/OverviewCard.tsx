import Card from "@/components/shared/Card/Card";

const OverviewCard = ({count, title}: {count: number, title: string}) => {
  return (
    <Card className="p-4 w-full">
      <span className="text-2xl tracking-wider text-primary font-semibold">
        {count}
      </span>
      <h4 className="text-sm text-gray-600 tracking-wider">{title}</h4>
    </Card>
  );
};

export default OverviewCard;
