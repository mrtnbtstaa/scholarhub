import Button from "@/components/ui/Button/Button";
import Select from "@/components/ui/Select/Select";
import { cn } from "@/lib/cn";
import { GenericSelect } from "@/types/shared/select.types";
import { Table } from "@tanstack/react-table";
import {
  MdFirstPage,
  MdLastPage,
  MdOutlineNavigateBefore,
  MdOutlineNavigateNext,
} from "react-icons/md";

const displayPerPageData: GenericSelect[] = [
  { label: "8 / Page", value: 8 },
  { label: "10 / Page", value: 10 },
  { label: "15 / Page", value: 15 },
  { label: "20 / Page", value: 20 },
  { label: "25 / Page", value: 25 },
];

const notAllowed = "cursor-not-allowed";

const Pagination = <T,>({ table }: { table: Table<T> }) => {
  return (
    <div className="w-full rounded-t flex items-center p-2 justify-between bg-[#FCFEFF]">
      <div className="ml-2 flex items-center gap-2">
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount().toLocaleString().toLocaleString()}
        </strong>
      </div>
      <div className="flex items-center gap-3">
        <Button
          className={cn(!table.getCanPreviousPage() && notAllowed)}
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.firstPage()}
          variants="custom"
        >
          <MdFirstPage className="text-slate-900" size={20} />
        </Button>
        <Button
          className={cn(!table.getCanPreviousPage() && notAllowed)}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          variants="custom"
        >
          <MdOutlineNavigateBefore className="text-slate-900" size={20} />
        </Button>
        {Array.from({ length: table.getPageCount() }).map((_, idx) => (
          <Button
            variants="custom"
            disabled={idx === table.getState().pagination.pageIndex}
            onClick={() => table.setPageIndex(idx)}
            className={cn(
              "px-4 py-2 inline-block text-slate-900 hover:border-btn-primary duration-100 ease-linear",
              idx === table.getState().pagination.pageIndex
                ? `bg-btn-primary text-white font-semibold ${notAllowed}`
                : "border border-primary-border",
            )}
            key={idx}
          >
            {idx + 1}
          </Button>
        ))}
        <Button
          className={cn(!table.getCanNextPage() && notAllowed)}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          variants="custom"
        >
          <MdOutlineNavigateNext className="text-slate-900" size={20} />
        </Button>
        <Button
          className={cn(!table.getCanNextPage() && notAllowed)}
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
          variants="custom"
        >
          <MdLastPage className="text-slate-900" size={20} />
        </Button>
      </div>
      <div className="mr-2">
        <Select
          // value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          variants="default"
          data={displayPerPageData}
        />
      </div>
    </div>
  );
};

export default Pagination;
