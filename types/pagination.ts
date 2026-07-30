import { ColumnDef } from "@tanstack/react-table";

export type Actions =
  | { type: "view"; href: string }
  | { type: "edit"; href: string }
  | { type: "delete"; onClick: () => void }
  | { type: "suspended"; onClick: () => void };

type Header = {
  title: string;
  actionTitle: string;
  href?: string;
};

export interface PaginatedProps<T> {
  data: T[];
  columns?: ColumnDef<T, unknown>[];
  type?: "grid" | "table";
  children?: (row: T, index: number) => React.ReactNode;
  withPagination?: boolean; // boolean flag for showing the pagination
  className?: string; // Optional className
  header?: Header; // Optional for table with header
  actions?: Actions[]; // Optional actions for table/grid
}
