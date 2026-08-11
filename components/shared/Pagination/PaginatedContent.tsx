"use client";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { Id, PaginatedProps } from "@/types/shared/pagination";
import { cn } from "@/lib/cn";
import PaginatedTable from "./PaginatedTable";
import Pagination from "./Pagination";

const PaginatedContent = <T extends Id>({
  data,
  columns = [],
  type = "grid",
  children,
  withPagination = true,
  className,
  header,
  actions,
  pageSize = 8,
}: PaginatedProps<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });

  const tableColumn = useMemo(() => columns, [columns]);

  const table = useReactTable<T>({
    columns: tableColumn,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <>
      {type === "grid" && children ? (
        <>
          <div
            className={cn(
              "grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-3",
              className,
            )}
          >
            {data &&
              data.map((item, index) => (
                <div key={index}>{children(item, index)}</div>
              ))}
          </div>
          {withPagination && data.length > 0 && <Pagination table={table} />}
        </>
      ) : (
        <PaginatedTable
          table={table}
          data={data}
          header={header}
          actions={actions}
          withPagination={withPagination}
        />
      )}
    </>
  );
};

export default PaginatedContent;
