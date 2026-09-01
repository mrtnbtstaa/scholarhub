"use client";

import { cn } from "@/lib/helpers/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, ElementType } from "react";

interface NavigateProps extends ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
  className?: string;
  prefixClassName?: string;
  suffixIcon?: ElementType;
  prefixIcon?: ElementType;
  variants?:
    | "primary"
    | "redirect"
    | "sidebar"
    | "default"
    | "outlined"
    | "custom";
}

const variantStyles: Record<
  NonNullable<NavigateProps["variants"]>,
  string
> = {
  primary: "bg-primary hover:bg-[#0f5ffd] transition-colors duration-75 ease-in-out text-white tracking-wide font-semibold rounded-md text-md",
  redirect: "text-primary tracking-wide font-medium text-md",
  sidebar: "sidebar",
  default: "text-gray-600 tracking-wide text-md font-semibold",
  outlined: "font-semibold border border-btn-primary rounded-lg text-md",
  custom: "",
};

const sidebarStyles = {
  active: "tracking-wider font-medium bg-primary w-full p-3 text-sidebar-primary-foreground rounded-lg",
  inactive: "ml-2",
};

const Navigate = ({
  children,
  className,
  prefixClassName,
  suffixIcon: SuffixIcon,
  prefixIcon: PrefixIcon,
  variants = "primary",
  href,
  ...props
}: NavigateProps) => {
  const pathname = usePathname();

  const hrefString = typeof href === "string" ? href : href?.pathname ?? "";

  const isActive = hrefString === "/" ? pathname === "/" : pathname.startsWith(hrefString);

  const isSidebar = variants === "sidebar";

  const content = SuffixIcon ? (
    <div className="inline-flex items-center gap-3">
      <SuffixIcon
        className={cn(
          "text-2xl",
          isActive ? "text-foreground" : "text-muted-foreground"
        )}
      />
      {children}
    </div>
  ) : PrefixIcon ? (
    <div className="inline-flex items-center gap-2">
      {children}
      <PrefixIcon
        className={cn("text-2xl text-white", prefixClassName)}
      />
    </div>
  ) : (
    children
  );

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "leading-none",
        variantStyles[variants],
        className
        ,

        isSidebar &&
          (isActive
            ? sidebarStyles.active
            : sidebarStyles.inactive),

        className
      )}
    >
      {content}
    </Link>
  );
};

export default Navigate;