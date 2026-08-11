"use client";

import LineProgress from "@/components/shared/LineProgress/LineProgress";
import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/cn";
import { buildColumns } from "@/lib/table/columnBuilder";

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

const columns = buildColumns<ScholarshipTableData>({
  scholarship: {cell: (value) => <h4 className="font-semibold text-md tracking-wider">{value}</h4>},
  country: {cell: (value) => <span className="tracking-wider text-sm">{value}</span>},
  status: {cell: (value) => {
    return (
      <div
          className={cn(
            "inline-block rounded-full px-3",
            value === "preparing" && "bg-[#fef8c2]",
            value === "submitted" && "bg-[#ddfde7]",
            value === "saved" && "bg-[#c3eafe]",
          )}
        >
          <span
            className={cn(
              "tracking-wider text-xs",
              value === "preparing" && "text-[#8d611e]",
              value === "submitted" && "text-[#356534]",
              value === "saved" && "text-[#4950ae]",
            )}
          >
            {value}
          </span>
        </div>
    )
  }},
  deadline: {cell: (value) => <span className="tracking-wider text-sm">{value}</span>},
  progress: {cell: (value) => {
    return (
         <div className="flex items-center gap-4">
            <LineProgress className="bg-btn-primary" percentage={value} />
            <span className="text-xs tracking-wider text-gray-600">{value}%</span>
        </div>
    )
  }}
});

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
