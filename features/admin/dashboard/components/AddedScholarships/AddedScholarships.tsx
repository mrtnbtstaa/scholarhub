"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { cn } from "@/lib/helpers/cn";
import { buildColumns } from "@/lib/table/columnBuilder";

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

const columns = buildColumns<RecentSholarshipsData>({
  scholarship: {
    cell: (value) => (
      <h4 className="text-primary font-semibold text-sm tracking-wider">
        {value}
      </h4>
    ),
  },
  provider: {
    cell: (value) => (
      <span className="text-sm text-gray-700 tracking-wider">{value}</span>
    ),
  },
  country: {
    cell: (value) => (
      <span className="text-sm text-gray-700 tracking-wider">{value}</span>
    ),
  },
  createdBy: {
    header: "CREATED BY",
    cell: (value) => (
      <span className="text-sm text-gray-700 tracking-wider">{value}</span>
    ),
  },
  status: {
    cell: (value) => {
      return (
        <div
          className={cn(
            "px-3 rounded-full inline-block",
            value === "published" && "bg-[#6df9bb]",
            value === "draft" && "bg-[#d3e4fe]",
            value === "pending" && "bg-[#fedbd6]",
          )}
        >
          <span
            className={cn(
              "text-xs tracking-wider font-medium",
              value === "published" && "text-[#015347]",
              value === "draft" && "text-[#50585e]",
              value === "pending" && "text-[#93010b]",
            )}
          >
            {value.toUpperCase()}
          </span>
        </div>
      );
    },
  },
});

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
