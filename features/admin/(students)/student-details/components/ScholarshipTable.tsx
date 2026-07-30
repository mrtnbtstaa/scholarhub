"use client";

import LineProgress from "@/components/shared/LineProgress/LineProgress";
import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/cn";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

interface ScholarshipTableData {
  id: string;
  scholarship: string;
  country: string;
  status: "preparing" | "submitted" | "saved";
  deadline: string;
  progress: number;
}

const data: ScholarshipTableData[] = [
  {
    id: "1",
    scholarship: "MEXT Scholarship",
    country: "Japan",
    status: "preparing",
    deadline: "Sept 30, 2026",
    progress: 70,
  },
  {
    id: "2",
    scholarship: "MEXT Scholarship",
    country: "Japan",
    status: "submitted",
    deadline: "Sept 30, 2026",
    progress: 70,
  },
  {
    id: "3",
    scholarship: "MEXT Scholarship",
    country: "Japan",
    status: "saved",
    deadline: "Sept 30, 2026",
    progress: 70,
  },
];

const columnHelper = createColumnHelper<ScholarshipTableData>();

const columns = [
  columnHelper.accessor("scholarship", {
    header: () => "SCHOLARSHIP",
    cell: (info) => {
      return (
        <h4 className="font-semibold text-md tracking-wider">
          {info.getValue()}
        </h4>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("country", {
    header: () => "COUNTRY",
    cell: (info) => {
      return <span className="tracking-wider text-sm">{info.getValue()}</span>;
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
            "inline-block rounded-full px-3",
            status === "preparing" && "bg-[#fef8c2]",
            status === "submitted" && "bg-[#ddfde7]",
            status === "saved" && "bg-[#c3eafe]",
          )}
        >
          <span
            className={cn(
              "tracking-wider text-xs",
              status === "preparing" && "text-[#8d611e]",
              status === "submitted" && "text-[#356534]",
              status === "saved" && "text-[#4950ae]",
            )}
          >
            {status}
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("deadline", {
    header: () => "DEADLINE",
    cell: (info) => {
      return <span className="tracking-wider text-sm">{info.getValue()}</span>;
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: () => "PROGRESS",
    cell: (info) => {
      return (
        <div className="flex items-center gap-4">
            <LineProgress className="bg-btn-primary" percentage={info.getValue()} />
            <span className="text-xs tracking-wider text-gray-600">{info.getValue()}%</span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
] as ColumnDef<ScholarshipTableData, unknown>[];

const ScholarshipTable = () => {
  return (
    <PaginatedContent
      type="table"
      data={data}
      columns={columns}
      header={{
        title: "Scholarship Activity",
        actionTitle: "3 Active Trackers",
      }}
    />
  );
};

export default ScholarshipTable;
