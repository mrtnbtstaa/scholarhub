import { ColumnDef } from "@tanstack/react-table";


export type Actions = {
  actionList?: ("delete" | "view" | "edit" | "suspended" | "active" | "disabled")[]
}

type Header = {
  title: string;
  actionTitle: string;
  href: string;
};

export interface PaginatedProps<T> {
  data: T[];
  columns?: ColumnDef<T, unknown>[];
  type?: "grid" | "table";
  children?: (row: T, index: number) => React.ReactNode;
  withPagination?: boolean; // boolean flag for showing the pagination
  className?: string;
  header?: Header; // Optional header for table/grid with header
  actions?: Actions;
}