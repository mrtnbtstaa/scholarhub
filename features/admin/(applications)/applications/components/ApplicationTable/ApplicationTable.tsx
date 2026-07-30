"use client";
import LineProgress from "@/components/shared/LineProgress/LineProgress";
import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/constants/routes";
import { getInitials } from "@/lib/utils";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useParams } from "next/navigation";

interface ApplicationTableData {
  id: string;
  studentName: string;
  country: string;
  scholarshipName: string;
  provider: string;
  progress: number;
  status: "preparing" | "submitted" | "awarded";
  deadline: string;
}

const data: ApplicationTableData[] = [
  {
    id: "1",
    studentName: "Martin Bautista",
    country: "Philippines",
    scholarshipName: "MEXT Undergraduate",
    provider: "Japan",
    progress: 70,
    status: "preparing",
    deadline: "Sept. 30",
  },
  {
    id: "2",
    studentName: "Martin Bautista",
    country: "Philippines",
    scholarshipName: "MEXT Undergraduate",
    provider: "Japan",
    progress: 70,
    status: "awarded",
    deadline: "Sept. 30",
  },
  {
    id: "3",
    studentName: "Martin Bautista",
    country: "Philippines",
    scholarshipName: "MEXT Undergraduate",
    provider: "Japan",
    progress: 70,
    status: "submitted",
    deadline: "Sept. 30",
  },
];

const columnHelper = createColumnHelper<ApplicationTableData>();

const columns = [
  columnHelper.accessor("id", {
    header: () => "APPLICATION ID",
    cell: (info) => {
      return <span>{info.getValue()}</span>;
    },
  }),
  columnHelper.accessor("studentName", {
    header: () => "STUDENT",
    cell: (info) => {
      const original = info.row.original;
      return (
        <div className="flex items-center gap-1">
          <div className="w-9 h-9 rounded-full flex items-center justify-center p-4 bg-[#dde8ff]">
            <span className="font-semibold text-xs tracking-wider">
              {getInitials(info.getValue())}
            </span>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-md tracking-wider text-gray-800">
              {original.studentName}
            </span>
            <span className="text-xs tracking-wider text-gray-600">
              {original.country}
            </span>
          </div>
        </div>
      );
    },
  }),
  columnHelper.accessor("scholarshipName", {
    header: () => "SCHOLARSHIP/PROVIDER",
    cell: (info) => {
      return (
        <div className="flex flex-col items-start">
          <span className="font-semibold text-md tracking-wider">
            {info.getValue()}
          </span>
          <span className="text-xs tracking-wider text-gray-600">
            {info.row.original.provider.toUpperCase()}
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("progress", {
    header: () => "PROGRESS",
    cell: (info) => {
      return (
        <div className="flex flex-col items-start">
          <span className="text-xs tracking-wider">{info.getValue()}%</span>
          <LineProgress className="bg-secondary" percentage={info.getValue()} />
        </div>
      );
    },
  }),
  columnHelper.accessor("status", {
    header: () => "STATUS",
    cell: (info) => {
      const status = info.getValue();
      return (
        <div
          className={cn(
            "px-3 py-1 rounded-full inline-block",
            status === "preparing" && "bg-[#dde8ff]",
            status === "submitted" && "bg-[#6df9bb]",
            status === "awarded" && "bg-[#006c49]",
          )}
        >
          <span
            className={cn(
              "text-xs tracking-wider",
              status === "preparing" && "text-[#0b1c79]",
              status === "submitted" && "text-[#009491]",
              status === "awarded" && "text-[#fffcdd]",
            )}
          >
            {info.getValue().toUpperCase()}
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("deadline", {
    header: () => "DEADLINE",
    cell: (info) => {
      return (
        <span className="text-md tracking-wider font-medium text-gray-700">
          {info.getValue()}
        </span>
      );
    },
  }),
] as ColumnDef<ApplicationTableData, unknown>[];

const ApplicationTable = () => {


  return (
    <PaginatedContent
      data={data}
      columns={columns}
      type="table"
      actions={{
        type: "view",
        href: routes.admin.applications,
      }}
    />
  );
};

export default ApplicationTable;
