"use client";
import { DataTable } from "@/components/data-table/page";
import { Separator } from "@/components/ui/separator";
import { UserPage } from "@/types/user";
import { columns } from "./columns";

interface ProductsClientProps {
  data: UserPage;
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  return (

    <>
      <Separator />
      <DataTable columns={columns} data={data.records || []} />
    </>
  );
};
