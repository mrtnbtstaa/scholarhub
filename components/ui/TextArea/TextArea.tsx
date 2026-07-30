import { cn } from "@/lib/cn";
import { ComponentPropsWithoutRef } from "react";

interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  className?: string;
}

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <textarea rows={3} cols={50}
      {...props}
      className={cn(
        className,
        "border border-[#c5c7cf] outline-none focus-visible:border-secondary rounded-lg w-full relative bg-[#fefffe] p-4 scrollbar-thin",
      )}
    ></textarea>
  );
};

export default TextArea;
