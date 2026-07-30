import { cn } from "@/lib/cn";
import { ComponentPropsWithoutRef, ElementType } from "react";


type HeadingProps<T extends ElementType> = {
    as?: T,
    children: React.ReactNode;
} & ComponentPropsWithoutRef<T>


const Heading = <T extends ElementType = "h3"> ({as, children, className, ...props}: HeadingProps<T>) => {
    const Component = as || "h3";
    return (
        <Component className={
            cn(
                "tracking-tight text-slate-900 dark:text-slate-100 font-bold",
                className
            )
        } {...props}>
            {children}
        </Component>
    )
}

export default Heading;