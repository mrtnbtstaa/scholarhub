"use client";

import Input from "@/components/ui/Input/Input";
import Card from "../Card/Card";
import { MdSearch } from "react-icons/md";
import { ComponentPropsWithoutRef } from "react";

interface FilterbarProps extends ComponentPropsWithoutRef<"input"> {
  children: React.ReactNode;
}

const FilterBar = ({ children, ...props }: FilterbarProps) => {
  return (
    <Card className="p-4 mt-4 flex md:flex-row flex-col items-center gap-2 w-full">
      <div className="md:w-[95%] w-full">
        <Input {...props} className="p-3" prefixIcon={MdSearch} />
      </div>
      <div className="flex items-center gap-4 w-full">{children}</div>
    </Card>
  );
};

export default FilterBar;
