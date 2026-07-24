import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  className?: string;
}

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <textarea rows={4} cols={50}
      {...props}
      className={cn(
        className,
        "border border-[#c5c7cf] outline-none focus-visible:border-secondary rounded-lg mt-2 w-full relative bg-[#fefffe] p-4",
      )}
    ></textarea>
  );
};

export default TextArea;
