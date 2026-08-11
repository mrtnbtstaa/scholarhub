"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/cn";
import { buildColumns } from "@/lib/table/columnBuilder";
import { getInitials } from "@/lib/utils";

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

const columns = buildColumns<ActivityData>({
  fullName: {
    header: "ADMIN",
    cell: (value) => {
      return (
        <div className="flex items-center gap-2">
          <div className="bg-[#002045] rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white text-xs tracking-wider font-semibold">
              {getInitials(value)}
            </span>
          </div>
          <span className="text-md font-semibold text-secondary tracking-wider">
            {value}
          </span>
        </div>
      );
    },
  },
  action: {
    cell: (value) => (
      <span className="text-gray-700 tracking-wider text-sm">{value}</span>
    ),
  },
  resource: {
    cell: (value) => (
      <span className="text-gray-700 tracking-wider text-sm font-semibold">
        {value}
      </span>
    ),
  },
  timestamp: {
    cell: (value) => (
      <span className="text-gray-700 tracking-wider text-sm">
        {value} hrs ago
      </span>
    ),
  },
  status: {
    cell: (value) => {
      return (
        <div
          className={cn(
            "px-3 rounded-full inline-block",
            value === "success" && "bg-[#6df9bb]",
            value === "warning" && "bg-[#fedbd6]",
          )}
        >
          <span
            className={cn(
              "text-xs font-medium tracking-wider",
              value === "success" && "text-[#105336]",
              value === "warning" && "text-[#93010b]",
            )}
          >
            {value.toUpperCase()}
          </span>
        </div>
      );
    },
  },
});

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
        href: "/",
      }}
    />
  );
};

export default AdminActivity;
