import Card from "@/components/shared/Card/Card";
import { ElementType } from "react";

interface OnboardingCardProps{
    icon: ElementType;
    title: string;
    description: string;
}

const OnboardingCard = ({icon: Icon, title, description}: OnboardingCardProps) => {
  return (
    <Card className="border h-35 border-[#efeef2] hover:shadow-gray-300 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-center w-full px-8">
        <Icon className="text-3xl text-primary" />
      <h2 className="text-primary font-semibold tracking-wider lg:text-lg text-md">
        {title}
      </h2>
      <p className="text-sm text-gray-500 tracking-wide">
        {description}
      </p>
    </Card>
  );
};

export default OnboardingCard;
