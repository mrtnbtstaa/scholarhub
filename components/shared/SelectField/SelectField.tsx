"use client";
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/helpers/cn";
import { GenericSelect } from "@/types/shared/select.types";

type SelectProps = {
  /** Currently selected value. Always pass a defined string (never undefined) to keep this controlled from the first render. */
  value: string;
  /** Called with the newly selected value. */
  onChange: (value: string | null) => void;
  data: GenericSelect[];
  placeholder?: string;
  className?: string;
  size?: "sm" | "default";
  variant?: "primary" | "secondary" | "tertiary" | "custom";
};

const variantStyles: Record<NonNullable<SelectProps["variant"]>, string> = {
  primary: "border border-primary-border bg-[#fefffe]",
  secondary: "border border-gray-200 bg-gray-50",
  tertiary: "border border-gray-300 bg-gray-100",
  custom: "",
};

const SelectField = ({
  value,
  onChange,
  data,
  placeholder,
  className,
  size = "default",
  variant = "primary",
}: SelectProps) => {
  const placeholderItem = data.find((item) => item.default);
  const options = data.filter((item) => item.value !== undefined);

  return (
    <ShadcnSelect  value={value} onValueChange={onChange}>
      <SelectTrigger className={cn(`w-full, ${className}`, variantStyles[variant])} size={size}>
        <SelectValue
          placeholder={placeholder ?? placeholderItem?.default ?? "Select..."}
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => (
          <SelectItem  className="py-5" key={String(item.value)} value={String(item.value)}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
};

export default SelectField;