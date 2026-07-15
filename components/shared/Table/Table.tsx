import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

interface TableProps extends ComponentPropsWithoutRef<"table"> {
  className?: string;
}

const TableRoot = ({ children, className, ...props }: TableProps) => {
  return (
    <div className={cn("min-w-75 overflow-x-auto", className)}>
      <table {...props} className="w-full p-4 table-auto min-w-150 scrollbar-thumb-sky-600 scrollbar-track-sky-100 scrollbar-thin">
        {children}
      </table>
    </div>
  );
};

const Thead = ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => {
  return (
    <thead {...props} className="bg-[#fafcff] w-full">
      {children}
    </thead>
  );
};

const Tr = ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => {
  return (
    <tr {...props} className="border-b border-[#c5c7cf]">
      {children}
    </tr>
  );
};

const Th = ({ children, ...props }: ComponentPropsWithoutRef<"th">) => {
  return (
    <th
      {...props}
      className="text-gray-500 text-sm tracking-wider p-4 text-left"
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
