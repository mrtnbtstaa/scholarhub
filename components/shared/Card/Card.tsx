import { cn } from "@/lib/cn";
import { ComponentPropsWithoutRef, ElementType } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
  variants?: "primary" | "secondary" | "custom";
  as?: ElementType; // Allows changing the HTML tag dynamically
}

const Card = ({
  children,
  className,
  variants = "primary",
  as: Component = "div",
  ...props
}: CardProps) => {
  return (
    <Component
      {...props}
      className={cn(
        className,
        "rounded-lg transition-all duration-150 ease-in-out",
        variants === "primary" &&
          cn("bg-white border border-[#c5c7cf]", className),
        variants === "secondary" && cn("bg-[#28436a]", className),
      )}
    >
      {children}
    </Component>
  );
};

export default Card;
