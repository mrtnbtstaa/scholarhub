"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/cn";
import { getInitials } from "@/lib/utils";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

interface ActivityData {
  id: string;
  fullName: string;
  action: string;
  resource: string;
  timestamp: string;
  status: "success" | "warning";
}

const data: ActivityData[] = [
  {
    id: "1",
    fullName: "Maria Santos",
    action: "Approved Scholarship",
    resource: "Global STEM Grant",
    timestamp: "2",
    status: "success",
  },
  {
    id: "2",
    fullName: "Jayson Santos",
    action: "Approved Scholarship",
    resource: "Global STEM Grant",
    timestamp: "2",
    status: "success",
  },
  {
    id: "3",
    fullName: "Robin Santos",
    action: "Approved Scholarship",
    resource: "Global STEM Grant",
    timestamp: "2",
    status: "warning",
  },
];

const columnHelper = createColumnHelper<ActivityData>();

const columns = [
  columnHelper.accessor("fullName", {
    header: () => "ADMIN",
    cell: (info) => {
      return (
        <div className="flex items-center gap-2">
          <div className="bg-[#002045] rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white text-xs tracking-wider font-semibold">
              {getInitials(info.getValue())}
            </span>
          </div>
          <span className="text-md font-semibold text-secondary tracking-wider">
            {info.getValue()}
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("action", {
    header: () => "ACTION",
    cell: (info) => {
      return (
        <span className="text-gray-700 tracking-wider text-sm">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("resource", {
    header: () => "RESOURCE",
    cell: (info) => {
      return (
        <span className="text-gray-700 tracking-wider text-sm font-semibold">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("timestamp", {
    header: () => "TIMESTAMP",
    cell: (info) => {
      return (
        <span className="text-gray-700 tracking-wider text-sm">
          {info.getValue()} hrs ago
        </span>
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
            "px-3 rounded-full inline-block",
            status === "success" && "bg-[#6df9bb]",
            status === "warning" && "bg-[#fedbd6]",
          )}
        >
          <span
            className={cn(
              "text-xs font-medium tracking-wider",
              status === "success" && "text-[#105336]",
              status === "warning" && "text-[#93010b]",
            )}
          >
            {info.getValue().toUpperCase()}
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
] as ColumnDef<ActivityData, unknown>[];

const AdminActivity = () => {
  return (
    <PaginatedContent
      withPagination={false}
      data={data}
      columns={columns}
      type="table"
      header={{
        title: "Admin Activity",
        actionTitle: "View Full Log",
        href: "/"
      }}
    />
  );
};

export default AdminActivity;
