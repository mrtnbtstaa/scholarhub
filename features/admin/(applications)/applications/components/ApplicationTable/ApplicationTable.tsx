"use client";
import LineProgress from "@/components/shared/LineProgress/LineProgress";
import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/helpers/cn";
import { routes } from "@/lib/constants/routes";
import { buildColumns } from "@/lib/table/columnBuilder";
import { getInitials } from "@/lib/helpers/utils";

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

const columns = buildColumns<ApplicationTableData>({
  id: {
    header: "APPLICATION ID",
    cell: (value) => <span>{value}</span>,
  },
  studentName: {
    header: "STUDENT",
    cell: (value, row) => {
      return (
        <div className="flex items-center gap-1">
          <div className="w-9 h-9 rounded-full flex items-center justify-center p-4 bg-[#dde8ff]">
            <span className="font-semibold text-xs tracking-wider">
              {getInitials(value)}
            </span>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-md tracking-wider text-gray-800">
              {row.studentName}
            </span>
            <span className="text-xs tracking-wider text-gray-600">
              {row.country}
            </span>
          </div>
        </div>
      );
    },
  },
  scholarshipName: {
    header: "SCHOLARSHIP/PROVIDER",
    cell: (value, row) => {
      return (
        <div className="flex flex-col items-start">
          <span className="font-semibold text-md tracking-wider">{value}</span>
          <span className="text-xs tracking-wider text-gray-600">
            {row.provider.toUpperCase()}
          </span>
        </div>
      );
    },
  },
  progress: {
    cell: (value) => {
      return (
        <div className="flex flex-col items-start">
          <span className="text-xs tracking-wider">{value}%</span>
          <LineProgress className="bg-secondary" percentage={value} />
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
            value === "preparing" && "bg-[#dde8ff]",
            value === "submitted" && "bg-[#6df9bb]",
            value === "awarded" && "bg-[#006c49]",
          )}
        >
          <span
            className={cn(
              "text-xs tracking-wider",
              value === "preparing" && "text-[#0b1c79]",
              value === "submitted" && "text-[#009491]",
              value === "awarded" && "text-[#fffcdd]",
            )}
          >
            {value}
          </span>
        </div>
      );
    },
  },
  deadline: {
    cell: (value) => (
      <span className="text-md tracking-wider font-medium text-gray-700">
        {value}
      </span>
    ),
  },
});

const ApplicationTable = () => {
  return (
    <PaginatedContent
      data={data}
      columns={columns}
      type="table"
      actions={[
        {
          type: "view",
          href: routes.admin.applications,
        },
      ]}
    />
  );
};

export default ApplicationTable;
