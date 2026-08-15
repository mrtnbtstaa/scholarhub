"use client";

import { cn } from "@/lib/helpers/cn";
import { useDropdownMenuStore } from "@/store/useDropdownMenuStore";
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
    | "success"
    | "redirect"
    | "sidebar"
    | "default"
    | "outlined"
    | "custom";
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
  const isSidebarOpen = useDropdownMenuStore((state) => state.isMenuOpen);

  const path = usePathname();

  const hrefString = typeof href === "string" ? href : href.pathname || "";
  const isActive = hrefString === "/" ? path === "/" : path.startsWith(hrefString);

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
        variants === "sidebar" && isActive && "tracking-wider font-medium bg-btn-primary w-full p-3 text-white rounded-lg",
        variants === "primary" && cn("bg-btn-primary hover:bg-[#0f5ffd] transition-colors duration-75 ease-in-out text-white tracking-wide font-semibold rounded-md text-md", className),
        variants === "default" && "text-gray-600 tracking-wide text-md font-semibold",
        variants === "outlined" && cn("font-semibold border border-btn-primary rounded-lg text-md", className),
        variants === "success" && "bg-[#006c49] rounded-lg text-white text-center font-semibold"
      )}
    >
      {SuffixIcon ? (
        <div className="inline-flex gap-4 items-center">
          {
            <SuffixIcon
              className={cn(
                "text-2xl",
                isActive ? "text-white" : "text-black",
              )}
            />
          }
          {children}
        </div>
      ) : PrefixIcon ? (
        <div className="inline-flex gap-2 items-center">
          {children}
          {
            <PrefixIcon
              className={cn("text-2xl text-white", prefixClassName)}
            />
          }
        </div>
      ) : (
        children
      )}
    </Link>
  );
};

export default Navigate;
