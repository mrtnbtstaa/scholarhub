"use client";

import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { MdPictureAsPdf } from "react-icons/md";

interface DocumentTableData {
  id: string;
  documentName: string;
  documentType: string;
  documentSize: string;
  category: string;
  usedIn: string;
  lastUpdated: string;
  status: string;
}
const data: DocumentTableData[] = [
  {
    id: "1",
    documentName: "Academic Transcript",
    documentType: "PDF",
    documentSize: "2.4 MB",
    category: "Academic",
    usedIn: "Singa",
    lastUpdated: "Aug 28, 2026",
    status: "Completed",
  },
  {
    id: "2",
    documentName: "Passport Copy",
    documentType: "PDF",
    documentSize: "2.4 MB",
    category: "Academic",
    usedIn: "Singa",
    lastUpdated: "Aug 28, 2026",
    status: "Completed",
  },
];
const columnHelper = createColumnHelper<DocumentTableData>();
const column = [
  columnHelper.accessor("documentName", {
    header: () => "DOCUMENT NAME",
    cell: (info) => {
      const documentName = info.getValue();
      const original = info.row.original;
      const documentSize = original.documentSize;
      const documentType = original.documentType;

      return (
        <div className="flex items-start gap-2">
          <MdPictureAsPdf />
          <div>
            <h3>{documentName}</h3>
            <div className="flex items-center gap-2">
              <span>{documentType}</span>
              <span>•</span>
              <span>{documentSize}</span>
            </div>
          </div>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("category", {
    header: () => "CATEGORY",
    cell: (info) => {
      return (
        <span className="text-lg tracking-wider font-normal">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("usedIn", {
    header: () => "USED IN",
    cell: (info) => {
      return (
        <div className="bg-[#e4efff] py-1 px-3 rounded-lg inline-block">
          <span className="text-xs text-primary font-semibold tracking-wider">
            {info.getValue()}
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("lastUpdated", {
    header: () => "LAST UPDATED",
    cell: (info) => {
      return (
        <span className="text-lg tracking-wider font-normal">
          {info.getValue()}
        </span>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: () => "STATUS",
    cell: (info) => {
      return (
        <div className="bg-[#e3fff1] py-1 px-3 rounded-lg inline-block">
          <span className="text-sm text-[#006c49] tracking-wider">
            {info.getValue()}
          </span>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
] as ColumnDef<DocumentTableData, unknown>[];

const DocumentTable = () => {
  return (
    <PaginatedContent
      withPagination={false}
      type="table"
      data={data}
      columns={column}
    />
  );
};

export default DocumentTable;
