export interface PaginatedMetadata<T> {
  data: T[];
  pagination: {
    currentPage: number;
    nextPage: number | null;
    previousPage: number | null;
  };
}
