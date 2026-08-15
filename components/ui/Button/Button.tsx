import { cn } from "@/lib/helpers/cn";
import React, { ComponentPropsWithoutRef, ElementType } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  children: React.ReactNode;
  suffixIcon?: ElementType;
  prefixIcon?: ElementType;
  iconClass?: string;
  variants?: "primary" | "secondary" | "outlined" | "danger" | "custom";
}

const Button = ({
  className,
  children,
  suffixIcon: SuffixIcon,
  prefixIcon: PrefixIcon,
  iconClass,
  variants = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-md outline-none cursor-pointer",
        className,
        // Conditional styles based on variants
        variants === "primary" && "bg-btn-primary text-white text-center",
        variants === "outlined" &&
          cn(
            "border border-gray-600/50 hover:border-btn-primary rounded-lg p-2 transition-colors duration-150 mb-4",
            className,
          ),
        variants === "danger" && "bg-red-600 text-white p-3",
      )}
    >
      {SuffixIcon ? (
        <div className="flex items-center gap-2 w-full text-center justify-center">
          <SuffixIcon className={cn("text-white text-2xl", iconClass)} />
          {children}
        </div>
      ) : PrefixIcon ? (
        <div className="flex items-center gap-2 md:text-start text-center justify-center">
          {children}
          <PrefixIcon className={cn("text-white text-2xl", iconClass)} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
