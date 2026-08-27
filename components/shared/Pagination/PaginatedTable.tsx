import Pagination from "./Pagination";
import Card from "../Card/Card";
import Navigate from "@/components/ui/Navigate/Navigate";
import Button from "@/components/ui/Button/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import PaginatedAction from "./PaginatedAction";
import { flexRender, Table as ReactTtable } from "@tanstack/react-table";
import { Actions, HeaderConfig, Id } from "@/types/shared/pagination";
import { useState } from "react";
import { Table } from "../Table/Table";

const PaginatedTable = <T extends Id>({
  table,
  header,
  actions,
  data,
  withPagination,
}: {
  table: ReactTtable<T>;
  header: HeaderConfig | undefined;
  actions: Actions[] | undefined;
  data: T[];
  withPagination?: boolean;
}) => {
  const [viewActionId, setViewActionId] = useState<string | null>(null);
  return (
    <Card
      className="mt-4 bg-white rounded-t-2xl border border-primary-border overflow-hidden"
      variants="custom"
    >
      {header && (
        <header className="flex items-center justify-between p-4">
          <h3 className="md:text-lg md:text-md text-sm text-primary tracking-widest font-semibold">
            {header.title}
          </h3>
          {header.href && (
            <Navigate
              href={header.href}
              variants="custom"
              className="text-primary whitespace-nowrap font-semibold tracking-wider md:text-md text-sm"
            >
              {header.actionTitle}
            </Navigate>
          )}
        </header>
      )}
      <Table className="rounded-t-lg relative">
        <Table.Thead className={`${header && "rounded-none"}`}>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </Table.Th>
              ))}
              {actions && <Table.Th>ACTION</Table.Th>}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {table.getRowModel().rows.map((row) => (
            <Table.Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
              {actions && (
                <Table.Td className="relative">
                  <Button
                    variants="custom"
                    onClick={() =>
                      setViewActionId((id) =>
                        id === row.original.id ? null : row.original.id,
                      )
                    }
                  >
                    <BsThreeDotsVertical />
                  </Button>
                  <PaginatedAction
                    isVisible={viewActionId === row.original.id}
                    actions={actions}
                    id={row.original.id}
                  />
                </Table.Td>
              )}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      {withPagination && data.length > 0 && <Pagination table={table} />}
    </Card>
  );
};

export default PaginatedTable;
