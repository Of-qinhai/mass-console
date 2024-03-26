"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/types/user";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => (
      row.original.name || '-'
    )
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  {
    accessorKey: "balance",
    header: "FREE CREDIT",
    cell: ({ row }) => (
      row.original.balance || 0
    )
  },
  {
    accessorKey: "paymentMethodBindStatus",
    header: "BIND CARD",
    cell: ({ row }) => {
      const paymentMethodBindStatus = row.original.paymentMethodBindStatus;
      if (paymentMethodBindStatus === undefined || paymentMethodBindStatus === null) {
        return '-';
      }
      return paymentMethodBindStatus ? 'true' : 'false';
    }
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
