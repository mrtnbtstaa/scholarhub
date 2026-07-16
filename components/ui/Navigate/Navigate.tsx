"use client";

import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
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
    | "secondary"
    | "redirect"
    | "sidebar"
    | "default"
    | "outlined";
}

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
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);

  const path = usePathname();

  const hrefString = typeof href === "string" ? href : href.pathname || "";

  const isActive =
    hrefString === "/" ? path === "/" : path.startsWith(hrefString);

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        className,
        "leading-none",
        !isActive && variants === "sidebar" && "ml-2",
        // Conditional styles based on variants and isActive
        variants === "redirect" && "text-secondary tracking-wide font-medium text-md",
        variants === "sidebar" && isActive && cn("tracking-wider font-medium bg-secondary w-full p-3 text-white rounded-lg", !isSidebarOpen && "p-2"),
        variants === "primary" && "bg-secondary text-white tracking-wide font-semibold rounded-md text-md",
        variants === "default" && "text-gray-600 tracking-wide text-md font-semibold",
        variants === "outlined" && "border border-secondary rounded-lg"
      )}
    >
      {SuffixIcon ? (
        <div className="inline-flex gap-4 items-center">
          {
            <SuffixIcon
              className={cn(
                "text-2xl",
                isActive ? "text-gray-300" : "text-black",  
              )}
            />
          }
          {children}
        </div>
      ) : PrefixIcon ? (
        <div className="inline-flex gap-2 items-center">
          {children}
          {<PrefixIcon className={cn("text-2xl text-white", prefixClassName)} />}
        </div>
      ) : (
        children
      )}
    </Link>
  );
};

export default Navigate;
