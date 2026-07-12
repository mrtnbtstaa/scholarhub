import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  children: React.ReactNode;
  variants?: "primary" | "secondary" | "outlined" | "none";
}

const Button = ({ className, children, variants = "primary", ...props }: ButtonProps) => {
  return (
    <button
    {...props}
      className={cn(
        className,
        "rounded-md outline-none border-none cursor-pointer",
        // Conditional styles based on variants
        variants === "primary" && "bg-[#002045] text-white text-center",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
