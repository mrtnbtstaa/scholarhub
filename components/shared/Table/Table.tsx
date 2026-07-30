import { cn } from "@/lib/cn";
import React, { ComponentPropsWithoutRef } from "react";

interface TableProps extends ComponentPropsWithoutRef<"table"> {
  className?: string;
}

const TableRoot = ({ children, className, ...props }: TableProps) => {
  return (
    <div className={cn("min-w-75 overflow-x-auto scrollbar-thin scrollbar-thumb-secondary", className)}>
      <table {...props} className="w-full p-4 table-auto min-w-200">
        {children}
      </table>
    </div>
  );
};

const Thead = ({ children, className, ...props }: ComponentPropsWithoutRef<"thead">) => {
  return (
    <thead {...props} className={
      cn(
        "bg-[#f7f9fd] w-full rounded-full", className
      )
    }>
      {children}
    </thead>
  );
};

const Tr = ({ className, children, ...props }: ComponentPropsWithoutRef<"tr">) => {
  return (
    <tr {...props} className={cn(
      "border-b border-[#c5c7cf]", className
    )}>
      {children}
    </tr>
  );
};

const Th = ({ children, ...props }: ComponentPropsWithoutRef<"th">) => {
  return (
    <th
      {...props}
      className="text-gray-800 text-xs tracking-widest p-4 text-left"
    >
      {children}
    </th>
  );
};

const Tbody = ({ children, ...props }: ComponentPropsWithoutRef<"tbody">) => {
  return <tbody {...props}>{children}</tbody>;
};

const Td = ({ children, ...props }: ComponentPropsWithoutRef<"td">) => {
  return (
    <td {...props} className="p-4 text-left">
      {children}
    </td>
  );
};

// Compound components
export const Table = Object.assign(TableRoot, {
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
});
