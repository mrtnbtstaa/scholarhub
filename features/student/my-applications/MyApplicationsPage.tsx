"use client";

import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Section from "@/components/shared/Section/Section";
import ApplicationCards from "./components/ApplicationCards/ApplicationCards";
import ApplicationBanner from "./components/ApplicationBanner/ApplicationBanner";
import ApplicationPriority from "./components/ApplicationPriority/ApplicationPriority";
import ApplicationFilter from "./components/ApplicationFilter/ApplicationFilter";
import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { ApplicationData } from "./types/applicationData";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import LineProgress from "@/components/shared/LineProgress/LineProgress";
import { cn } from "@/lib/utils";

const dummyApplicationData: ApplicationData[] = [
  {
    id: "1",
    scholarship: "MEXT Undergraduate Scholarship",
    deadline: "Sept 30, 2026",
    progress: 70,
    status: "Submitted",
    priority: "High Priority",
    createdAt: "Sept 15, 2026",
    country: "Japan",
  },
  {
    id: "2",
    scholarship: "MEXT Undergraduate Scholarship",
    deadline: "Sept 30, 2026",
    progress: 70,
    status: "Under Review",
    priority: "High Priority",
    createdAt: "Sept 15, 2026",
    country: "Japan",
  },
  {
    id: "3",
    scholarship: "MEXT Undergraduate Scholarship",
    deadline: "Sept 30, 2026",
    progress: 70,
    status: "Preparing",
    priority: "High Priority",
    createdAt: "Sept 15, 2026",
    country: "Japan",
  },
];
const columnHelper = createColumnHelper<ApplicationData>();
const columns = [
  columnHelper.accessor("scholarship", {
    header: () => "Scholarship",
    cell: (info) => {
      const scholarship = info.getValue();  
      const original = info.row.original;
      const priority = original.priority;
      const country = original.country;
      return (
        <div className="flex flex-col items-start">
          <span className="text-secondary tracking-wider md:text-md text-sm font-medium">
            {scholarship}
          </span>
          <div className="flex items-center gap-2">
            <span className="tracking-wider text-xs font-normal">
              {country}
            </span>
            <span>•</span>
            <span className="text-red-600 tracking-wider text-xs font-semibold">
              {priority}
            </span>
          </div>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("deadline", {
    header: () => "Deadline",
    cell: (info) => {
      const deadline = info.getValue();
      return (
        <div className="flex flex-col items-start">
          <span className="text-secondary md:text-md text-sm tracking-wider font-normal">
            {deadline}
          </span>
          <span className="text-red-600 tracking-wider text-xs font-semibold">
            5 days left
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: () => "Progress",
    cell: (info) => {
      const progress = info.getValue();
      return (
        <div className="flex items-start flex-col">
          <LineProgress percentage={progress} className="bg-secondary" />
          <div>
            <span className="tracking-wider text-xs font-normal">
              {progress}%
            </span>
            <span className="tracking-wider text-xs font-normal ml-1">
              Complete
            </span>
          </div>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <div className={
          cn(
            "inline-block px-3 py-1 rounded-2xl",
            status === "Preparing" && "bg-[#e4efff]",
            status === "Submitted" && "bg-secondary",
            status === "Under Review" && "bg-[#d3e4fe]",
            status === "Not Started" && "bg-[#e4efff]",
          )
        }>
          <span className={
            cn(
              "text-xs tracking-wide font-semibold whitespace-nowrap",
              status === "Submitted" && "text-white",
              status === "Under Review" && "text-secondary",
              status === "Not Started" && "text-[#75849e]"
            )
          }>{status}</span>
        </div>
      )
    },
    footer: (info) => info.column.id,
  }),
] as ColumnDef<ApplicationData, unknown>[];

const MyApplicationsPage = () => {
  return (
    <Section>
      <PageHeader
        title="My Applications"
        description="Manage all your scholarship applications in one place. Keep track of deadlines, required documents, and submission statuses."
      />
      <ApplicationBanner />
      <ApplicationCards />
      <ApplicationPriority />
      <ApplicationFilter />
      <PaginatedContent
        type="table"
        data={dummyApplicationData}
        columns={columns}
        withPagination={false}  
      />
    </Section>
  );
};

export default MyApplicationsPage;
