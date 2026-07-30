import Card from "@/components/shared/Card/Card";
import { cn } from "@/lib/cn";
import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
}

const OnboardingContainer = ({ children, className }: ContainerProps) => {
  return (
    <Card className={cn(
        "mx-auto my-auto md:min-w-[50%] min-w-full",
        className
    )}>
      {children}
    </Card>
  );
};

export default OnboardingContainer;
