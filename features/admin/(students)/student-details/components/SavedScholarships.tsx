"use client";

import Card from "@/components/shared/Card/Card";
import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { MdArrowRightAlt } from "react-icons/md";

interface SavedScholarshipData {
  id: string;
  scholarshipName: string;
  description: string;
  matchPercentage: number;
}

const data: SavedScholarshipData[] = [
  {
    id: "1",
    scholarshipName: "Australia Awards",
    description:
      "Fully funded scholarship for international students to study in Australia.",
    matchPercentage: 80,
  },
  {
    id: "2",
    scholarshipName: "Australia Awards",
    description:
      "Fully funded scholarship for international students to study in Australia.",
    matchPercentage: 80,
  },
  {
    id: "3",
    scholarshipName: "Australia Awards",
    description:
      "Fully funded scholarship for international students to study in Australia.",
    matchPercentage: 80,
  },
  {
    id: "4",
    scholarshipName: "Australia Awards",
    description:
      "Fully funded scholarship for international students to study in Australia.",
    matchPercentage: 80,
  },
];

const SavedScholarships = () => {
  return (
    <>
      <h2 className="text-2xl tracking-wider my-4">Saved Scholarships</h2>
      <PaginatedContent className="lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mb-4" data={data}>
        {(row) => (
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-2xl tracking-wider">
                {row.scholarshipName}
              </h4>
              <div className="px-3 py-1 rounded-lg bg-btn-primary">
                <span className="text-xs tracking-wider text-white font-semibold">
                  Match: 98%
                </span>
              </div>
            </div>
            <p className="text-sm tracking-wider mt-4">{row.description}</p>
            <div className="flex items-center justify-between mt-4">
              <p>Full Funding</p>
              <MdArrowRightAlt className="text-4xl" />
            </div>
          </Card>
        )}
      </PaginatedContent>
    </>
  );
};
export default SavedScholarships;
