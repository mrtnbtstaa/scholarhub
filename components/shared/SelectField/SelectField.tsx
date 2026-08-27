"use client";
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterParam } from "@/hooks/useFilterParam";
import { GenericSelect } from "@/types/shared/select.types";

type SelectProps = {
  paramKey: string;
  data: GenericSelect[];
  placeholder?: string;
  className?: string;
  size?: "sm" | "default";
};

const SelectField = ({
  paramKey,
  data,
  placeholder,
  className,
  size = "default",
}: SelectProps) => {
  const placeholderItem = data.find((item) => item.default);
  const options = data.filter((item) => item.value !== undefined);
  const [value, setValue] = useFilterParam(paramKey)

  return (
    <ShadcnSelect value={value} onValueChange={setValue as (value: string | null) => void}>
      <SelectTrigger className={`${className} py-5 px-3`} size={size}>
        <SelectValue
          placeholder={placeholder ?? placeholderItem?.default ?? "Select..."}
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => (
          <SelectItem key={String(item.value)} value={String(item.value)}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
};

export default SelectField;