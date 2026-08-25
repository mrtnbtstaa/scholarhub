import Input from "@/components/ui/Input/Input";
import { cn } from "@/lib/helpers/cn";
import { ComponentPropsWithoutRef } from "react";

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  className?: string;
}

const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <Input
      {...props}
      type="checkbox"
      variant="custom"
      className={cn(
        className,
        "scale-115 accent-btn-primary utline-none border-none rounded-full appearance-none w-full",
      )}
    />
  );
};

export default Checkbox;
