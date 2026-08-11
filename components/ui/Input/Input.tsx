import { cn } from "@/lib/cn";
import { ComponentPropsWithoutRef, ElementType, forwardRef } from "react";
import Button from "../Button/Button";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  className?: string;
  prefixIcon?: ElementType;
  suffixIcon?: ElementType;
  SuffixOnClick?: () => void;
  withIcon?: boolean;
  variants?: "primary" | "secondary" | "custom";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      prefixIcon: PrefixIcon,
      suffixIcon: SuffixIcon,
      SuffixOnClick,
      withIcon = true,
      variants = "primary",
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {withIcon ? (
          <div
            className={cn(
              className,
              variants === "primary" &&
                "border border-primary-border focus-visible:border-secondary rounded-lg w-full relative bg-[#fefffe]",
              variants === "secondary" && "",
            )}
          >
            {PrefixIcon && (
              <PrefixIcon className="absolute left-2 translate-y-1/2 bottom-1/2 text-2xl text-black/50 z-100" />
            )}
            <input
              {...props}
              ref={ref}
              className={cn(
                "outline-none border-none w-full p-3",
                PrefixIcon ? "ml-6" : "ml-2",
              )}
            />
            {SuffixIcon && (
              <Button
                type="button"
                variants="custom"
                className="absolute translate-y-1/2 right-2 bottom-1/2"
                onClick={SuffixOnClick}
              >
                <SuffixIcon className=" text-2xl text-black/80" />
              </Button>
            )}
          </div>
        ) : (
          <input
            {...props}
            ref={ref}
            className="outline-none border-none w-full p-3"
          />
        )}
      </>
    );
  },
);

Input.displayName = "Input";

export default Input;
