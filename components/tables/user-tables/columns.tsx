"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/types/user";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "balance",
    header: "Free Credit",
    cell: ({ row }) => (
      row.original.balance || 0
    )
  },
  {
    accessorKey: "paymentMethodBindStatus",
    header: "Bind Card",
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
