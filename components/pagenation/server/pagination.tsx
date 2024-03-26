import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export function Paginations({ table, activeIndex }: {
    table: any;
    activeIndex: number;
}) {
    const pageCount = table.getPageCount();
    if (pageCount <= 1) return null;
    return (
        <>
            <Pagination className="justify-end px-4">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() =>
                                table.getCanPreviousPage() &&
                                table.previousPage()
                            }
                            className={cn({
                                muted: !table.getCanPreviousPage(),
                                "cursor-pointer": table.getCanPreviousPage(),
                            })}
                        />
                    </PaginationItem>
                    {table.getPageOptions().map((index: number) => (
                        <PaginationItem key={`pagination-${index}`}>
                            <PaginationLink
                                onClick={() => table.setPageIndex(index)}
                                isActive={activeIndex === index}
                                className={cn({
                                    "cursor-pointer": activeIndex !== index,
                                })}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext
                            onClick={() =>
                                table.getCanNextPage() && table.nextPage()
                            }
                            className={cn({
                                muted: !table.getCanNextPage(),
                                "cursor-pointer": table.getCanNextPage(),
                            })}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}
