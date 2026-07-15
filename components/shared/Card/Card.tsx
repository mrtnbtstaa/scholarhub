import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variants?: "primary" | "secondary"
  as?: ElementType; // Allows changing the HTML tag dynamically
};

const Card = ({ children, className, variants="primary", as: Component = "div" }: CardProps) => {
  return (
    <Component className={
        cn(
            className,
            "rounded-lg transition-all duration-150 ease-in-out",
            variants === "primary" && "bg-white border border-[#c5c7cf]",
            variants === "secondary" && "bg-[#28436a]"
        )
    }>
        {children}
    </Component>
  );
};

export default Card;
