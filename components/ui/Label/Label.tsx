import { cn } from "@/lib/helpers/cn";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  isRequired?: boolean;
}

const Label = ({
  htmlFor,
  children,
  className,
  isRequired = false,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className={cn(
        "text-sm text-primary font-semibold tracking-wide",
        className,
      )}
    >
      <div className="flex items-center gap-1">
        {children}
        {isRequired && <span className="text-xs text-red-600">*</span>}
      </div>
    </label>
  );
};

export default Label;
