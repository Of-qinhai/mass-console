"use client";
import { DataTable } from "@/components/data-table/page";
import { Separator } from "@/components/ui/separator";
import { PlaygroundPage } from "@/types/playground";
import { columns } from "./columns";

interface ProductsClientProps {
    data: PlaygroundPage;
}

export const PlaygroundClient: React.FC<ProductsClientProps> = ({ data }) => {
    return (
        <>
            <Separator />
            <DataTable columns={columns} data={data.records || []} />
        </>
    );
};
