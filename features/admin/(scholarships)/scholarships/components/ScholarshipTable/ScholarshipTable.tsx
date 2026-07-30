"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/constants/routes";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

interface ScholarshipTableData {
  id: string;
  title: string;
  provider: string;
  degree: string;
  deadline: string;
  status: "published" | "pending" | "draft";
  source: string;
}

const data: ScholarshipTableData[] = [
  {
    id: "SCH-112",
    title: "MEXT Undergraduate Scholarship 2024",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "published",
    source: "API Import",
  },
  {
    id: "SCH-113",
    title: "MEXT Undergraduate Scholarship 2024",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "draft",
    source: "API Import",
  },
  {
    id: "SCH-114",
    title: "MEXT Undergraduate Scholarship 2024",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-115",
    title: "MEXT Undergraduate Scholarship 2024",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-116",
    title: "MEXT Undergraduate Scholarship 2024",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-117",
    title: "MEXT Undergraduate Scholarship 2024",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-118",
    title: "MEXT Undergraduate Scholarship 2024",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-119",
    title: "MEXT Undergraduate Scholarship 2024",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-120",
    title: "MEXT Undergraduate Scholarship 2024",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
];

const columnHelper = createColumnHelper<ScholarshipTableData>();

const columns = [
  columnHelper.accessor("title", {
    header: () => "ID & Title",
    cell: (info) => {
      const title = info.getValue();
      const id = info.row.original.id;

      return (
        <div className="flex flex-col items-start gap-1">
          <span className="text-xs tracking-wider text-gray-700">{id}</span>
          <h4 className="text-secondary text-md font-semibold tracking-wider">
            {title}
          </h4>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("provider", {
    header: () => "PROVIDER",
    cell: (info) => {
      return (
        <span className="text-gray-700 tracking-wider text-sm">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("degree", {
    header: () => "DEGREE",
    cell: (info) => {
      return (
        <span className="text-gray-700 tracking-wider text-sm">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("deadline", {
    header: () => "DEADLINE",
    cell: (info) => {
      return (
        <span className="text-gray-700 tracking-wider text-sm">
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
            "px-3 py-1 rounded-full inline-block",
            status === "published" && "bg-[#6df9bb]",
            status === "pending" && "bg-[#d3e4fe]",
            status === "draft" && "bg-[#cbdaf4]",
          )}
        >
          <span
            className={cn(
              "tracking-wider text-xs",
              status === "published" && "text-[#017568]",
              status === "pending" && "text-[#012086]",
              status === "draft" && "text-[#424775]",
            )}
          >
            {status.toUpperCase()}
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("source", {
    header: () => "SOURCE",
    cell: (info) => {
      return (
        <span className="text-gray-700 tracking-wider text-sm">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
] as ColumnDef<ScholarshipTableData, unknown>[];

const ScholarshipTable = () => {
  return (
    <PaginatedContent
      data={data}
      columns={columns}
      type="table"
      withPagination={false}
      actions={[
        { type: "view", href: routes.admin.viewScholarship },
        { type: "edit", href: routes.admin.editScholarship },
      ]}
    />
  );
};

export default ScholarshipTable;
