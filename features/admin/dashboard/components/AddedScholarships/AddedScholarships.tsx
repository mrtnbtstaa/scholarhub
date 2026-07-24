"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/utils";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

interface RecentSholarshipsData {
  id: string;
  scholarship: string;
  provider: string;
  country: string;
  createdBy: string;
  status: "published" | "draft" | "pending";
}

const data: RecentSholarshipsData[] = [
  {
    id: "1",
    scholarship: "GLOBAL STEM Grant",
    provider: "Creative Hub",
    country: "Canada",
    createdBy: "J. Cruz",
    status: "published",
  },
  {
    id: "2",
    scholarship: "Artistic Vision Award",
    provider: "Green Earth Org",
    country: "Canada",
    createdBy: "J. David",
    status: "draft",
  },
  {
    id: "3",
    scholarship: "Sustainability Masters",
    provider: "Creative Hub",
    country: "Canada",
    createdBy: "J. Cruz",
    status: "pending",
  },
];

const columnHelper = createColumnHelper<RecentSholarshipsData>();

const columns = [
  columnHelper.accessor("scholarship", {
    header: () => "SCHOLARSHIP",
    cell: (info) => {
      return (
        <h4 className="text-secondary font-semibold text-sm tracking-wider">
          {info.getValue()}
        </h4>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("provider", {
    header: () => "PROVIDER",
    cell: (info) => {
      return (
        <span className="text-sm text-gray-700 tracking-wider">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("country", {
    header: () => "COUNTRY",
    cell: (info) => {
      return (
        <span className="text-sm text-gray-700 tracking-wider">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("createdBy", {
    header: () => "CREATED BY",
    cell: (info) => {
      return (
        <span className="text-sm text-gray-700 tracking-wider">
          {info.getValue()}
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
            status === "published" && "bg-[#6df9bb]",
            status === "draft" && "bg-[#d3e4fe]",
            status === "pending" && "bg-[#fedbd6]",
          )}
        >
          <span
            className={cn(
              "text-xs tracking-wider font-medium",
              status === "published" && "text-[#015347]",
              status === "draft" && "text-[#50585e]",
              status === "pending" && "text-[#93010b]",
            )}
          >
            {status.toUpperCase()}
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
] as ColumnDef<RecentSholarshipsData, unknown>[];

const AddedScholarships = () => {
  return (
    <PaginatedContent
      type="table"
      withPagination={false}
      header={{
        actionTitle: "View All",
        title: "Recently Added Scholarships",
        href: "/",
      }}
      data={data}
      columns={columns}
    />
  );
};

export default AddedScholarships;
