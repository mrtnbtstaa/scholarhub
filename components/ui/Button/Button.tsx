import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef, ElementType } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  children: React.ReactNode;
  suffixIcon?: ElementType;
  prefixIcon?: ElementType;
  iconClass?: string;
  variants?: "primary" | "secondary" | "outlined" | "delete" | "custom";
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
        className,
        "rounded-md outline-none cursor-pointer",
        // Conditional styles based on variants
        variants === "primary" && "bg-[#002045] text-white text-center",
        variants === "outlined" &&
          cn(
            "border border-[#c5c7cf] rounded-full p-2 hover:border-secondary transition-colors duration-150 mb-4",
            className,
          ),
      )}
    >
      {SuffixIcon ? (
        <div className="flex items-center gap-2 md:text-start text-center md:justify-start justify-center">
          <SuffixIcon className={cn("text-white text-2xl", iconClass)} />
          {children}
        </div>
      ) : PrefixIcon ? (
        <div className="flex items-center gap-2 md:text-start text-center justify-start">
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
