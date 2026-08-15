export interface Pagination {
    count: number;
    page: number;
    pageSize: number;
    totalPages: number;
    next: string | null;
    previous: string | null;
}

export interface PaginationMeta {
    pagination: Pagination;
}