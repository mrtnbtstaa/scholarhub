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
        "rounded-md outline-none  cursor-pointer",
        // Conditional styles based on variants
        variants === "primary" && "bg-[#002045] text-white text-center",
        variants === "outlined" && "border border-[#c5c7cf] rounded-full p-2 hover:border-secondary transition-colors duration-150 mb-4"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
