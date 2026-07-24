import { cn } from "@/lib/utils";
import { GenericSelect } from "@/types/select.types";
import { ComponentPropsWithoutRef } from "react";

interface SelectProps<T> extends ComponentPropsWithoutRef<"select"> {
  data: T[];
  variants?: "primary" | "default"
  className?: string;
}

const Select = <T extends GenericSelect>({ data, variants = "primary", className }: SelectProps<T>) => {
  return (
    <select className={cn(
      "py-4 px-2 w-full",
      variants === "primary" && cn("border border-[#c5c7cf] focus-visible:border-secondary rounded-lg outline-none bg-[#fefffe]", className),
      variants === "default" && cn("outline-none border-none", className)
    )}>
      {data &&
        data.map((select) => (
          <option defaultValue={select.default} key={select.label} value={select.value}>
            {select.label}
          </option>
        ))}
    </select>
  );
};

export default Select;
