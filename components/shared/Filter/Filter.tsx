"use client";

import Input from "@/components/ui/Input/Input";
import Card from "../Card/Card";
import { MdSearch } from "react-icons/md";
import { ChangeEvent, ComponentPropsWithoutRef, useRef, useState } from "react";
import Button from "@/components/ui/Button/Button";
import { IoFilterOutline } from "react-icons/io5";
import { cn } from "@/lib/cn";
import Divider from "../Divider/Divider";
import { GenericSelect } from "@/types/shared/select.types";
import FormField from "@/components/ui/FormField/FormField";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Filters {
  label: string;
  filterData: GenericSelect[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

interface FilterbarProps extends ComponentPropsWithoutRef<"input"> {
  resetFilter?: () => void;
  applyFilter?: () => void;
  filters: Filters[];
}

const Filter = ({
  resetFilter,
  applyFilter,
  filters,
  className,
  ...props
}: FilterbarProps) => {
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
    );
  }, [filterVisible]);

  return (
    <div className="mt-4 flex items-center gap-2 relative">
      <div className="w-full">
        <Input
          {...props}
          className="overflow-hidden w-full"
          prefixIcon={MdSearch}
        />
      </div>
      <Button
        onClick={() => setFilterVisible((isVisible) => !isVisible)}
        iconClass="text-gray-600"
        suffixIcon={IoFilterOutline}
        variants="custom"
        className="p-3 border border-primary-border rounded-lg bg-[#fefffe] text-sm text-gray-600 tracking-wider font-medium"
      >
        Filter
      </Button>
      {filterVisible && (
        <Card ref={ref} 
          className={cn(
            className,
            "absolute top-15 right-0 z-1000 flex flex-col lg:w-1/4 w-full transition-transform duration-75 ease-in-out",
          )}
        >
          <h3 className="text-sm font-medium tracking-widest my-3 mx-4">
            Filter
          </h3>
          <Divider />
          <div className="flex flex-col items-start gap-2 px-4">
            {filters &&
              filters.map((filter) => (
                <FormField className="w-full" key={filter.label}>
                  <Label htmlFor={filter.label.toLowerCase()}>
                    {filter.label}
                  </Label>
                  <Select data={filter.filterData} onChange={filter.onChange} />
                </FormField>
              ))}
          </div>
          <Divider className="my-2" />
          <div className="px-4 mb-2 flex items-center justify-between">
            <Button
              onClick={resetFilter}
              className="p-2 border border-gray-600 shadow-sm text-sm tracking-wider font-semibold"
              variants="custom"
            >
              Reset all
            </Button>
            <Button
              onClick={applyFilter}
              className="p-2 text-sm tracking-wider"
            >
              Apply now
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Filter;
