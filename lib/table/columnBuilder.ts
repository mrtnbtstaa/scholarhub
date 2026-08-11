import { ColumnDef, RowData } from "@tanstack/react-table";

export type ColumnConfig<T> = {
  [K in keyof T]?: {
    header?: string;
    cell?: (value: T[K], row: T) => React.ReactNode;
  };
};

export function buildColumns<T extends RowData>(
  config: ColumnConfig<T>,
): ColumnDef<T, unknown>[] {
  return Object.entries(config).map(([key, options]) => {
    const opts = options as {
      header?: string;
      cell?: (value: unknown, row: T) => React.ReactNode;
    };

    return {
      accessorKey: key,
      header: opts?.header?.toUpperCase() ?? key.toUpperCase(),
      cell: (info) => {
        const val = info.getValue();
        return opts?.cell
          ? opts.cell(val, info.row.original)
          : String(val ?? "");
      },
      footer: (info) => info.column.id,
    } as ColumnDef<T, unknown>;
  });
}
