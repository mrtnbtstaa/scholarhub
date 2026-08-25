import { cn } from "@/lib/helpers/cn";
import { ComponentPropsWithoutRef, ElementType, forwardRef } from "react";
import Button from "../Button/Button";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  prefixIcon?: ElementType;
  suffixIcon?: ElementType;
  SuffixOnClick?: () => void;
  variant?: "primary" | "secondary" | "custom";
}

const variantStyles: Record<NonNullable<InputProps["variant"]>, string> = {
  primary: "border border-primary-border bg-[#fefffe]",
  secondary: "border border-gray-200 bg-gray-50",
  custom: "",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      prefixIcon: PrefixIcon,
      suffixIcon: SuffixIcon,
      SuffixOnClick: suffixOnClick,
      variant = "primary",
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "relative flex items-center w-full rounded-lg bg-transparent transition-colors focus-within:ring-2 focus-within:ring-primary-border",
          variantStyles[variant],
          disabled && "opacity-50 pointer-events-none",
          className,
        )}
      >
        {PrefixIcon && (
          <PrefixIcon className="absolute left-3 text-2xl text-black/80 pointer-events-none z-10" />
        )}

        <input
          {...props}
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full bg-transparent p-3 outline-none border-none text-base",
            PrefixIcon ? "pl-10" : "pl-3",
            SuffixIcon ? "pr-10" : "pr-3",
          )}
        />

        {SuffixIcon && (
          <Button
            type="button"
            variants="custom"
            className="absolute right-3 p-0 hover:bg-transparent"
            onClick={suffixOnClick}
            disabled={disabled}
            tabIndex={suffixOnClick ? 0 : -1}
          >
            <SuffixIcon className="text-2xl text-black/80" />
          </Button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;