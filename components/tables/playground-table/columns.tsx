"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Playground } from "@/types/playground";

export const columns: ColumnDef<Playground>[] = [
    {
        accessorKey: "name",
        header: "NAME",
        cell: ({ row }) => (
            row.original.name || '-'
        )
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "fast",
        header: "Accelerated",
        cell: ({ row }) => (
            row.original.fast ? 'Yes' : 'No'
        )
    },
    {
        accessorKey: "roles",
        header: "VISIBLE ROLES",
        // cell: ({ row }) => (
        //     row.original.roles.join(', ')
        // )
    },
    {
        accessorKey: "status",
        header: "STATUS",
    },
    {
        accessorKey: "createdAt",
        header: "CREATE DATE",
    },

    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
