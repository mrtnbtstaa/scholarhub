"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

interface NavigateProps extends ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
  className?: string;
  variants?: "primary" | "secondary" | "redirect";
}

const Navigate = ({
  children,
  className,
  variants = "primary",
  href,
  ...props
}: NavigateProps) => {
  // const pathname = usePathname();

  // const isActive = href === pathname;

  return (
    <Link href={href} {...props} className={cn(
        className,
        // Conditional styles based on variants and isActive
        variants === "redirect" && "text-secondary tracking-wide font-medium"
    )}>
      {children}
    </Link>
  );
};

export default Navigate;
