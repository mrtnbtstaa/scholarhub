import { GenericSelect } from "@/types/select.types";
import { ComponentPropsWithoutRef } from "react";

interface SelectProps<T> extends ComponentPropsWithoutRef<"select"> {
  data: T[];
}

const Select = <T extends GenericSelect>({ data }: SelectProps<T>) => {
  return (
    <select className="py-4 px-2 border border-[#c5c7cf] focus-visible:border-secondary rounded-lg outline-none bg-[#fefffe] w-full">
      {data &&
        data.map((select) => (
          <option key={select.label} value={select.value}>
            {select.label}
          </option>
        ))}
    </select>
  );
};

export default Select;
