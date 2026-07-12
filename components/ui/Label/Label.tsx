interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children, ...props }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} {...props} className="text-sm text-primary font-semibold tracking-wide">
      {children}
    </label>
  );
};

export default Label;
