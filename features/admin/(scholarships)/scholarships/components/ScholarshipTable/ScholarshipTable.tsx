"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/helpers/cn";
import { routes } from "@/lib/constants/routes";
import { buildColumns } from "@/lib/table/columnBuilder";

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
    title: "MEXT Undergraduate Scholarship 2024 1",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "published",
    source: "API Import",
  },
  {
    id: "SCH-113",
    title: "MEXT Undergraduate Scholarship 2024 2",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "draft",
    source: "API Import",
  },
  {
    id: "SCH-114",
    title: "MEXT Undergraduate Scholarship 2024 3",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-115",
    title: "MEXT Undergraduate Scholarship 2024 4",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-116",
    title: "MEXT Undergraduate Scholarship 2024 5",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-117",
    title: "MEXT Undergraduate Scholarship 2024 6",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-118",
    title: "MEXT Undergraduate Scholarship 2024 7",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-119",
    title: "MEXT Undergraduate Scholarship 2024 8",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
  {
    id: "SCH-120",
    title: "MEXT Undergraduate Scholarship 2024 9",
    provider: "MEXT Ministry of Education",
    degree: "Undergraduate",
    deadline: "Oct 24, 2026",
    status: "pending",
    source: "API Import",
  },
];

const columns = buildColumns<ScholarshipTableData>({
  title: {
    header: "ID & Title",
    cell: (value, row) => {
      return (
        <div className="flex flex-col items-start gap-1">
          <span className="text-xs tracking-wider text-gray-700">{row.id}</span>
          <h4 className="text-secondary text-md font-semibold tracking-wider">
            {value}
          </h4>
        </div>
      );
    },
  },
  provider: {
    cell: (value) => (
      <span className="text-gray-700 tracking-wider text-sm">{value}</span>
    ),
  },
  degree: {
    cell: (value) => (
      <span className="text-gray-700 tracking-wider text-sm">{value}</span>
    ),
  },
  deadline: {
    cell: (value) => (
      <span className="text-gray-700 tracking-wider text-sm">{value}</span>
    ),
  },
  status: {
    cell: (value) => {
      return (
        <div
          className={cn(
            "px-3 py-1 rounded-full inline-block",
            value === "published" && "bg-[#6df9bb]",
            value === "pending" && "bg-[#d3e4fe]",
            value === "draft" && "bg-[#cbdaf4]",
          )}
        >
          <span
            className={cn(
              "tracking-wider text-xs",
              value === "published" && "text-[#017568]",
              value === "pending" && "text-[#012086]",
              value === "draft" && "text-[#424775]",
            )}
          >
            {value.toUpperCase()}
          </span>
        </div>
      );
    },
  },
  source: {
    cell: (value) => (
      <span className="text-gray-700 tracking-wider text-sm">{value}</span>
    ),
  },
});

const ScholarshipTable = () => {
  return (
    <PaginatedContent
      data={data}
      columns={columns}
      type="table"
      withPagination={true}
      actions={[
        { type: "view", href: routes.admin.viewScholarship },
        { type: "edit", href: routes.admin.editScholarship },
      ]}
    />
  );
};

export default ScholarshipTable;
