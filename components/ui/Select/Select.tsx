import { cn } from "@/lib/cn";
import { GenericSelect } from "@/types/shared/select.types";
import { ComponentPropsWithoutRef } from "react";

interface SelectProps<T> extends ComponentPropsWithoutRef<"select"> {
  data: T[];
  variants?: "primary" | "default";
  className?: string;
}

const Select = <T extends GenericSelect>({
  data,
  variants = "primary",
  className,
  ...props
}: SelectProps<T>) => {
  return (
    <select
      {...props}
      className={cn(
        "py-3 px-2 w-full",
        variants === "primary" &&
          cn(
            "border border-[#c5c7cf] focus-visible:border-secondary rounded-lg outline-none bg-[#fefffe]",
            className,
          ),
        variants === "default" && cn("outline-none", className),
      )}
    >
      {data &&
        data.map((select) => (
          <option
            key={select.value}
            value={select.value}
          >
            {select.label}
          </option>
        ))}
    </select>
  );
};

export default Select;
