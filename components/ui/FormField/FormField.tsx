interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FormField = ({ children, ...props }: FormFieldProps) => {
  return (
    <div {...props} className="flex flex-col items-start gap-2 my-4">
      {children}
    </div>
  );
};

export default FormField;
