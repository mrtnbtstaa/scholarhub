import { cn } from "@/lib/utils";

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const FormField = ({ children, className, ...props }: FormFieldProps) => {
  return (
    <div {...props} className={cn("flex flex-col items-start gap-2 my-2", className)}>
      {children}
    </div>
  );
};

export default FormField;
