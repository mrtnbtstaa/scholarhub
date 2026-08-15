import { cn } from "@/lib/helpers/cn";
import { FieldError } from "react-hook-form";

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  error?: FieldError
}

const FormField = ({ children, className, error, ...props }: FormFieldProps) => {
  return (
    <div {...props} className={cn("flex flex-col items-start gap-2 my-2", className)}>
      {children}
        {error && error?.message && (
          <p className="tracking-wider text-sm text-red-600">
            {error.message}
          </p>
        )}
    </div>
  );
};

export default FormField;
