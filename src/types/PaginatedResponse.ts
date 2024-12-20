export interface PaginatedResponse<T> {
  docs: T[]; // Array of documents
  totalDocs: number; // Total number of documents
  limit: number; // Limit of documents per page
  totalPages: number; // Total number of pages
  page: number; // Current page number
  pagingCounter: number; // Index of the first document on the page
  hasPrevPage: boolean; // Whether there's a previous page
  hasNextPage: boolean; // Whether there's a next page
  prevPage: number | null; // Previous page number, or null if none
  nextPage: number | null; // Next page number, or null if none
}
