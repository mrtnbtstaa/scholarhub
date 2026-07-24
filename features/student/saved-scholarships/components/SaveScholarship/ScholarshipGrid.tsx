"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import SaveScholarshipItem from "./SaveScholarshipItem";

export interface SaveScholarshipData {
  id: string;
  status: string;
  title: string;
  country: string;
  funding: string;
  deadline: string;
  request: string;
}

const data: SaveScholarshipData[] = [
  {
    id: "1",
    status: "Closing",
    title: "MEXT Undergraduate Scholarship",
    country: "Japan",
    funding: "Fully Funded",
    deadline: "Sept 30, 2026",
    request: "Need to request recommendation letter from my professor.",
  },
  {
    id: "2",
    status: "Closing",
    title: "MEXT Undergraduate Scholarship",
    country: "Japan",
    funding: "Fully Funded",
    deadline: "Sept 30, 2026",
    request: "Need to request recommendation letter from my professor.",
  },
  {
    id: "3",
    status: "Closing",
    title: "MEXT Undergraduate Scholarship",
    country: "Japan",
    funding: "Fully Funded",
    deadline: "Sept 30, 2026",
    request: "Need to request recommendation letter from my professor.",
  },
  {
    id: "4",
    status: "Closing",
    title: "MEXT Undergraduate Scholarship",
    country: "Japan",
    funding: "Fully Funded",
    deadline: "Sept 30, 2026",
    request: "Need to request recommendation letter from my professor.",
  },
  {
    id: "5",
    status: "Closing",
    title: "MEXT Undergraduate Scholarship",
    country: "Japan",
    funding: "Fully Funded",
    deadline: "Sept 30, 2026",
    request: "Need to request recommendation letter from my professor.",
  },
];

const ScholarshipGrid = () => {
  return (
    <PaginatedContent className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-3" data={data}>
      {(row) => <SaveScholarshipItem data={row} />}
    </PaginatedContent>
  );
};

export default ScholarshipGrid;
