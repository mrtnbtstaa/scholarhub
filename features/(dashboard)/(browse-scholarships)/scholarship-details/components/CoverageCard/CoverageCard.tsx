import Card from "@/components/shared/Card/Card";
import { ElementType } from "react";

interface CoverageProps {
  icon: ElementType;
  title: string;
  description: string;
}

const CoverageCard = ({ icon: Icon, title, description }: CoverageProps) => {
  return (
    <Card className="flex p-4 gap-4 items-start">
      <div className="bg-[#e4efff] p-3 rounded-lg">
        <Icon className="text-3xl text-secondary" />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-secondary font-semibold text-lg tracking-wider">
          {title}
        </h2>
        <p className="text-gray-700 font-normal tracking-wider">
          {description}
        </p>
      </div>
    </Card>
  );
};
export default CoverageCard;
