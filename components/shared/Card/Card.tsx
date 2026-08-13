import { cn } from "@/lib/cn";
import { ComponentPropsWithoutRef, ElementType, forwardRef } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
  variants?: "primary" | "secondary" | "custom";
  as?: ElementType; // Allows changing the HTML tag dynamically
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variants = "primary",
      as: Component = "div",
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        {...props}
        className={cn(
          "rounded-xl transition-all shadow-xs shadow-slate-200 duration-150 ease-in-out",
          variants === "primary" &&
          cn("bg-white border border-primary-border", className),
          variants === "secondary" && cn("bg-[#28436a]", className),
          className,
        )}
      >
        {children}
      </Component>
    );
  },
);

Card.displayName = "Card";

export default Card;

