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
  disabled?: boolean;
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
  disabled = false
}: SelectProps) => {
  
  // find or look for a default value, if none the placeholder will take the default value pass in placeHolderText
  const placeHolderItem = data.find((item) => item.default)
  // 3 fallbacks for placeholder first, if no placeholder pass, it will be the label of the item if it has default value if none, default is select...
  const placeHolderText = placeholder ?? placeHolderItem?.label  ?? "Select..."
  // if no value, ignores it and and wont be rendered in ui
  const options = data.filter((item) => item.value !== undefined);

  //
  const renderSelectedLabel = (val: string) => {
      if (!val) return placeHolderText;
      return options.find((item) => String(item.value) === val)?.label ?? val;
  }

  return (
    <ShadcnSelect  value={value} onValueChange={onChange}>
      <SelectTrigger disabled={disabled} className={cn(`w-full, ${className}`, variantStyles[variant])} size={size}>
        <SelectValue placeholder={placeHolderText}>
            {renderSelectedLabel}
        </SelectValue>
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