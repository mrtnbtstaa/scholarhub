import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "../Table/Table";
import Pagination from "./Pagination";
import Card from "../Card/Card";
import { cn } from "@/lib/utils";
import Navigate from "@/components/ui/Navigate/Navigate";
import Button from "@/components/ui/Button/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Actions, PaginatedProps } from "./pagination.types";
import { useState } from "react";

type Id = {
  id: string;
};

const ActionCard = ({
  actions,
  isVisible,
}: {
  actions?: Actions;
  isVisible: boolean;
}) => {
  return (
    <>
      {isVisible && (
        <Card className="p-4 flex flex-col items-start gap-4 absolute">
          {actions &&
            actions.actionList?.map((value) => (
              <Button
                className="text-md tracking-widest"
                variants="custom"
                key={value}
              >
                {value}
              </Button>
            ))}
        </Card>
      )}
    </>
  );
};

const PaginatedContent = <T extends Id>({
  data,
  columns = [],
  type = "grid",
  children,
  withPagination = true,
  className,
  header,
  actions,
}: PaginatedProps<T>) => {

  const [viewAction, setViewAction] = useState<string | null>(null);

  const table = useReactTable({
    columns: columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {type === "grid" && children ? (
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
      ) : (
        <Card
          className="mt-4 bg-white rounded-2xl border-none"
          variants="custom"
        >
          {header && (
            <header className="flex items-center justify-between p-4">
              <h3 className="md:text-lg md:text-md text-sm text-secondary tracking-widest font-semibold">
                {header.title}
              </h3>
              <Navigate
                href={header.href}
                variants="custom"
                className="text-secondary whitespace-nowrap font-semibold tracking-wider md:text-md text-sm"
              >
                {header.actionTitle}
              </Navigate>
            </header>
          )}
          <Table className="border border-[#e6e6ef] rounded-lg relative">
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
                  {actions?.actionList && <Table.Th>ACTION</Table.Th>}
                </Table.Tr>
              ))}
            </Table.Thead>
            <Table.Tbody>
              {table.getRowModel().rows.map((row) => (
                <Table.Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Table.Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Td>
                  ))}
                  {actions?.actionList?.length && (
                    <Table.Td className="relative">
                      <Button
                        variants="custom"
                        onClick={() =>
                          setViewAction((id) =>
                            id === row.original.id ? null : row.original.id,
                          )
                        }
                      >
                        <BsThreeDotsVertical />
                      </Button>
                      <ActionCard
                        isVisible={viewAction === row.original.id}
                        actions={actions}
                      />
                    </Table.Td>
                  )}
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card>
      )}
      {withPagination && data.length > 0 && <Pagination />}
    </>
  );
};

export default PaginatedContent;
