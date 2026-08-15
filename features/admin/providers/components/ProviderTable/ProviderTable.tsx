"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/helpers/cn";
import { buildColumns } from "@/lib/table/columnBuilder";

interface ProviderTableData {
  id: string;
  providerName: string;
  type: string;
  country: string;
  stats: number;
  status: "verified" | "pending" | "archived";
  studentCount: number | string;
}

const data: ProviderTableData[] = [
  {
    id: "JP-MEXT-2024",
    providerName: "Government of Japan (MEXT)",
    type: "Government",
    country: "Japan",
    stats: 84,
    status: "pending",
    studentCount: "6,412",
  },
  {
    id: "JP-MEXT-2024",
    providerName: "Government of Japan (MEXT)",
    type: "Government",
    country: "Japan",
    stats: 84,
    status: "archived",
    studentCount: "6,412",
  },
  {
    id: "JP-MEXT-2024",
    providerName: "Government of Japan (MEXT)",
    type: "Government",
    country: "Japan",
    stats: 84,
    status: "verified",
    studentCount: "6,412",
  },
  {
    id: "JP-MEXT-2024",
    providerName: "Government of Japan (MEXT)",
    type: "Government",
    country: "Japan",
    stats: 84,
    status: "verified",
    studentCount: "6,412",
  },
  {
    id: "JP-MEXT-2024",
    providerName: "Government of Japan (MEXT)",
    type: "Government",
    country: "Japan",
    stats: 84,
    status: "verified",
    studentCount: "6,412",
  },
  {
    id: "JP-MEXT-2024",
    providerName: "Government of Japan (MEXT)",
    type: "Government",
    country: "Japan",
    stats: 84,
    status: "verified",
    studentCount: "6,412",
  },
  {
    id: "JP-MEXT-2024",
    providerName: "Government of Japan (MEXT)",
    type: "Government",
    country: "Japan",
    stats: 84,
    status: "verified",
    studentCount: "6,412",
  },
  {
    id: "JP-MEXT-2024",
    providerName: "Government of Japan (MEXT)",
    type: "Government",
    country: "Japan",
    stats: 84,
    status: "verified",
    studentCount: "6,412",
  },
];

const columns = buildColumns<ProviderTableData>({
  providerName: {
    header: "PROVIDER NAME",
    cell: (value, row) => {
      return (
        <div className="flex flex-col items-start gap-1">
          <h4 className="font-semibold text-md tracking-wider">{value}</h4>
          <span className="text-sm tracking-wider font-normal">{row.id}</span>
        </div>
      );
    },
  },
  type: {
    cell: (value) => <span className="text-md tracking-wider">{value}</span>,
  },
  country: {
    cell: (value) => <span className="text-md tracking-wider">{value}</span>,
  },
  stats: {
    cell: (value, row) => {
      return (
        <div className="flex flex-col items-start">
          <span className="text-lg font-semibold">{value}</span>
          <span className="text-sm tracking-wider">
            {row.studentCount} STUDENTS
          </span>
        </div>
      );
    },
  },
  status: {
    cell: (value) => {
      return (
        <div
          className={cn(
            "px-3 py-1 rounded-full inline-block",
            value === "verified" && "bg-[#d3fceb]",
            value === "pending" && "bg-[#fdf2f2]",
            value === "archived" && "bg-[#e0f718]",
          )}
        >
          <span
            className={cn(
              "text-xs tracking-wider font-normal",
              value === "verified" && "text-[#4b7067]",
              value === "pending" && "text-[#ae012e]",
              value === "archived" && "text-[#616916]",
            )}
          >
            {value}
          </span>
        </div>
      );
    },
  },
});

const ProviderTable = () => {
  return (
    <PaginatedContent
      data={data}
      columns={columns}
      type="table"
      withPagination={true}
    />
  );
};

export default ProviderTable;
