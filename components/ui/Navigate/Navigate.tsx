"use client";

import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, ElementType } from "react";

interface NavigateProps extends ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
  className?: string;
  icon?: ElementType;
  variants?: "primary" | "secondary" | "redirect" | "sidebar" | "default";
}

const Navigate = ({
  children,
  className,
  icon: Icon,
  variants = "primary",
  href,
  ...props
}: NavigateProps) => {

  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);

  const path = usePathname();

  const hrefString = typeof href === "string" ? href : href.pathname || "";

  const isActive = hrefString === path;

  return (
    <Link href={href} {...props} className={cn(
        className,
        "leading-none",
        !isActive && variants === "sidebar" && "ml-2",
        // Conditional styles based on variants and isActive
        variants === "redirect" && "text-secondary tracking-wide font-medium text-md",
        variants === "sidebar" && isActive && cn(
          "tracking-wider font-medium bg-secondary w-full p-3 text-white rounded-lg",
          !isSidebarOpen && "p-2"
        ),
        variants === "primary" && "bg-secondary p-4 text-white tracking-wide font-semibold rounded-md text-md",
        variants === "default" && "text-gray-600 tracking-wide text-md font-semibold"
    )}>
      {Icon ? (
        <div className="inline-flex gap-4 items-center">
          {<Icon className={cn(
            "text-2xl",
            isActive ? "text-gray-300" : "text-black"
          )} />}
          {children}
        </div>
      ) : children}
    </Link>
  );
};

export default Navigate;
