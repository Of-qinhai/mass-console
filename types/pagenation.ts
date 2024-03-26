export interface Pagination {
	current: string | number;
	pageSize: number;
	total?: number;
}

export interface PaginationSectionProps {
	total: number; // Total number of records
	current: number | string; // Current page
	basePath: string; // Base path for the pagination links
	pageSize: number; // Number of records per page

	[key: string]: unknown; // Additional props
}