"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, ElementType } from "react";

interface NavigateProps extends ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
  className?: string;
  icon?: ElementType;
  variants?: "primary" | "secondary" | "redirect" | "sidebar";
}

const Navigate = ({
  children,
  className,
  icon: Icon,
  variants = "primary",
  href,
  ...props
}: NavigateProps) => {
  const path = usePathname();

  const hrefString = typeof href === "string" ? href : href.pathname || "";

  const isActive = hrefString === path;

  return (
    <Link href={href} {...props} className={cn(
        className,
        !isActive && "ml-2",
        // Conditional styles based on variants and isActive
        variants === "redirect" && "text-secondary tracking-wide font-medium",
        variants === "sidebar" && isActive && "tracking-wider font-medium bg-secondary w-full p-4 text-white rounded-lg"
    )}>
      {Icon ? (
        <div className="inline-flex gap-4 items-center">
          {<Icon className="text-2xl" />}
          {children}
        </div>
      ) : children}
    </Link>
  );
};

export default Navigate;
