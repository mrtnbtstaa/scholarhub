"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/helpers/cn";
import { routes } from "@/lib/constants/routes";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

interface StudentTableData {
  id: string;
  email: string;
  student: string;
  country: string;
  applicationCount: number;
  savedCount: number;
  lastLogin: number;
  status: "active" | "suspended" | "pending";
}

const data: StudentTableData[] = [
  {
    id: "1",
    email: "martinbautista0288@outlook.com",
    student: "Martin Bautista",
    country: "Philippines",
    applicationCount: 42,
    savedCount: 56,
    lastLogin: 3,
    status: "active",
  },
  {
    id: "2",
    email: "martinbautista0288@outlook.com",
    student: "Martin Bautista",
    country: "Philippines",
    applicationCount: 42,
    savedCount: 56,
    lastLogin: 3,
    status: "suspended",
  },
  {
    id: "3",
    email: "martinbautista0288@outlook.com",
    student: "Martin Bautista",
    country: "Philippines",
    applicationCount: 42,
    savedCount: 56,
    lastLogin: 3,
    status: "pending",
  },
  {
    id: "4",
    email: "martinbautista0288@outlook.com",
    student: "Martin Bautista",
    country: "Philippines",
    applicationCount: 42,
    savedCount: 56,
    lastLogin: 3,
    status: "pending",
  },
  {
    id: "5",
    email: "martinbautista0288@outlook.com",
    student: "Martin Bautista",
    country: "Philippines",
    applicationCount: 42,
    savedCount: 56,
    lastLogin: 3,
    status: "pending",
  },
  {
    id: "6",
    email: "martinbautista0288@outlook.com",
    student: "Martin Bautista",
    country: "Philippines",
    applicationCount: 42,
    savedCount: 56,
    lastLogin: 3,
    status: "pending",
  },
  {
    id: "7",
    email: "martinbautista0288@outlook.com",
    student: "Martin Bautista",
    country: "Philippines",
    applicationCount: 42,
    savedCount: 56,
    lastLogin: 3,
    status: "pending",
  },
  {
    id: "8",
    email: "martinbautista0288@outlook.com",
    student: "Martin Bautista",
    country: "Philippines",
    applicationCount: 42,
    savedCount: 56,
    lastLogin: 3,
    status: "pending",
  },
];

const columnHelper = createColumnHelper<StudentTableData>();

const columns = [
  columnHelper.accessor("student", {
    header: () => "STUDENT",
    cell: (info) => {
      const original = info.row.original;
      return (
        <div className="flex flex-col items-start">
          <h4 className="text-lg tracking-wider font-medium">
            {info.getValue()}
          </h4>
          <p className="text-sm tracking-wider font-normal text-gray-500">
            {original.email}
          </p>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("country", {
    header: () => "COUNTRY",
    cell: (info) => {
      return (
        <span className="font-semibold tracking-wider text-md">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("applicationCount", {
    header: () => "APPS",
    cell: (info) => {
      return (
        <div className="px-3 py-1 rounded-lg font-semibold inline-block bg-[#e4efff]">
          <span className="text-xs">{info.getValue()}</span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("savedCount", {
    header: () => "SAVED",
    cell: (info) => {
      return (
        <div className="px-3 py-1 rounded-lg font-semibold inline-block bg-[#e4efff]">
          <span className="text-xs">{info.getValue()}</span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("lastLogin", {
    header: () => "LAST LOGIN",
    cell: (info) => {
      return (
        <span className="text-md text-gray-700 tracking-wider">
          {info.getValue()} hours ago
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
            status === "active" && "bg-[#e3fff1]",
            status === "suspended" && "bg-[#ffefee]",
            status === "pending" && "bg-[#e4ebf1]",
          )}
        >
          <span
            className={cn(
              "text-xs tracking-wider font-semibold",
              status === "active" && "text-[#016d64]",
              status === "suspended" && "text-[#c11b1a]",
              status === "pending" && "text-[#012042]",
            )}
          >
            {status.toUpperCase()}
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
] as ColumnDef<StudentTableData, unknown>[];

const StudentTable = () => {
  return (
    <PaginatedContent
      data={data}
      columns={columns}
      withPagination={true}
      type="table"
      actions={[{type: "view", href: routes.admin.students}]}
    />
  );
};

export default StudentTable;
