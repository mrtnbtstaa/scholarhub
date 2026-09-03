import { cn } from "@/lib/helpers/cn";
import { Input } from "../ui/input";

type CustomInputProps = {
  className?: string;
  placeholder?: string;
} & React.ComponentProps<typeof Input>;

export const CustomInput = ({ className, ...props }: CustomInputProps) => {
  return (
    <div className="group relative">
      <Input
        type={props.type}
        autoComplete={props.autoComplete}
        {...props}
        placeholder=""
        className={cn(
          "z-10 rounded p-2 pt-3",
          className,
        )}
      />

      <span className="pointer-events-none absolute left-1 top-2 z-20 bg-transparent px-1.5 text-sm  transition-all duration-200 group-focus-within:-top-2.5 group-focus-within:bg-white text-muted-foreground group-focus-within:text-xs">
        {props.placeholder}
      </span>
    </div>
  );
};
