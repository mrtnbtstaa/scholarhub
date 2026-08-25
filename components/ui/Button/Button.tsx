import { cn } from "@/lib/helpers/cn";
import React, { ComponentPropsWithoutRef, ElementType } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  children: React.ReactNode;
  suffixIcon?: ElementType;
  prefixIcon?: ElementType;
  iconClass?: string;
  variants?: "primary" | "outlined" | "danger" | "custom";
  isLoading?: boolean;
}

const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={cn("animate-spin h-5 w-5 text-current", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const variantStyle: Record<NonNullable<ButtonProps["variants"]>, string> = {
  primary: "bg-btn-primary text-white text-center p-2",
  outlined: "border border-gray-600/50 hover:border-btn-primary rounded-lg p-2 transition-colors duration-150 mb-4",
  danger: "bg-red-600 text-white p-3",
  custom: ""
}

const Button = ({
  className,
  children,
  suffixIcon: SuffixIcon,
  prefixIcon: PrefixIcon,
  iconClass,
  variants = "primary",
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) => {
  const isButtonDisabled = disabled || isLoading;

  return (
    <button
      {...props}
      disabled={isButtonDisabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md outline-none cursor-pointer transition-all duration-150",
        variantStyle[variants],        
        // Disabled & Loading state
        isButtonDisabled && "opacity-70 cursor-not-allowed pointer-events-none",
        className
      )}
    >
      {isLoading ? (
        <Spinner className={iconClass} />
      ) : (
        PrefixIcon && <PrefixIcon className={cn("text-2xl", iconClass)} />
      )}

      <span>{children}</span>

      {!isLoading && SuffixIcon && (
        <SuffixIcon className={cn("text-2xl", iconClass)} />
      )}
    </button>
  );
};

export default Button;