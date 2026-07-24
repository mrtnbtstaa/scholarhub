import Card from "@/components/shared/Card/Card";
import { ElementType } from "react";

interface OnboardingCardProps{
    icon: ElementType;
    title: string;
    description: string;
}

const OnboardingCard = ({icon: Icon, title, description}: OnboardingCardProps) => {
  return (
    <Card className="border border-[#efeef2] flex flex-col items-center justify-center w-full p-3">
      <div className="p-2 bg-[#e4efff] rounded-full mb-2">
        <Icon className="text-3xl text-secondary" />
      </div>
      <h2 className="text-secondary font-semibold tracking-wider lg:text-lg text-md">
        {title}
      </h2>
      <p className="text-sm text-gray-500 tracking-wide">
        {description}
      </p>
    </Card>
  );
};

export default OnboardingCard;
