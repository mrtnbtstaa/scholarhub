import Input from "@/components/ui/Input/Input";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  className?: string;
}

const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <Input
      {...props}
      withIcon={false}
      type="checkbox"
      variants="secondary"
      className={cn(
        className,
        "lg:scale-130 md:scale-120 scale-115 accent-[#002045] outline-none border-none rounded-full appearance-none",
      )}
    />
  );
};

export default Checkbox;
