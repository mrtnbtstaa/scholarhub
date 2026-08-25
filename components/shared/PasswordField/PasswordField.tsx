"use client";

import Input from "@/components/ui/Input/Input";
import { ICONS } from "@/lib/constants/icons";
import { cn } from "@/lib/helpers/cn";
import { ComponentPropsWithoutRef, forwardRef, useState } from "react";

interface PasswordFieldProps extends ComponentPropsWithoutRef<"input"> {
  className?: string;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ className, ...props }, ref) => {
    const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);
    return (
      <Input
        {...props}
        ref={ref}
        type={toggleVisibility ? "text" : "password"}
        className={cn("w-full", className)}
        prefixIcon={ICONS.MdLock}
        suffixIcon={toggleVisibility ? ICONS.BsEyeFill : ICONS.BsEyeSlashFill}
        SuffixOnClick={() => setToggleVisibility(!toggleVisibility)}
        // required
      />
    );
  },
);


PasswordField.displayName = "PasswordField"

export default PasswordField;


