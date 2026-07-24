import Card from "@/components/shared/Card/Card";
import { ElementType } from "react";

const CardAnalytics = ({
  title,
  count,
  icon: Icon,
}: {
  title: string;
  count: number | string;
  icon: ElementType;
}) => {
  return (
    <Card className="p-4">
      <h4 className="text-gray-700 text-md tracking-wider">{title}</h4>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-2xl tracking-wider">{count}</span>
        <Icon className="text-2xl" />
      </div>
    </Card>
  );
};

export default CardAnalytics;
