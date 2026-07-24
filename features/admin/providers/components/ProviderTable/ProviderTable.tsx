"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/utils";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

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

const columnHelper = createColumnHelper<ProviderTableData>();

const columns = [
  columnHelper.accessor("providerName", {
    header: () => "PROVIDER NAME",
    cell: (info) => {
      const id = info.row.original.id;
      return (
        <div className="flex flex-col items-start gap-1">
          <h4 className="font-semibold text-md tracking-wider">
            {info.getValue()}
          </h4>
          <span className="text-sm tracking-wider font-normal">{id}</span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("type", {
    header: () => "TYPE",
    cell: (info) => {
      return <span className="text-md tracking-wider">{info.getValue()}</span>;
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("country", {
    header: () => "COUNTRY",
    cell: (info) => {
      return <span className="text-md tracking-wider">{info.getValue()}</span>;
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("stats", {
    header: () => "STATS",
    cell: (info) => {
      const studentCount = info.row.original.studentCount;
      return (
        <div className="flex flex-col items-start">
          <span className="text-lg font-semibold">{info.getValue()}</span>
          <span className="text-sm tracking-wider">
            {studentCount} STUDENTS
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: () => "STATUS",
    cell: (info) => {
      const status = info.getValue();
      return (
        <div
          className={cn(
            "px-3 py-1 rounded-full inline-block",
            status === "verified" && "bg-[#d3fceb]",
            status === "pending" && "bg-[#fdf2f2]",
            status === "archived" && "bg-[#e0f718]",
          )}
        >
          <span
            className={cn(
              "text-xs tracking-wider font-normal",
              status === "verified" && "text-[#4b7067]",
              status === "pending" && "text-[#ae012e]",
              status === "archived" && "text-[#616916]",
            )}
          >
            {info.getValue()}
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
] as ColumnDef<ProviderTableData, unknown>[];

const ProviderTable = () => {
  return (
    <PaginatedContent
      data={data}
      columns={columns}
      type="table"
      withPagination={false}
    />
  );
};

export default ProviderTable;
