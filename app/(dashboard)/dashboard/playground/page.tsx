import { PlaygroundClient } from "@/components/tables/playground-table/client";
import { PlaygroundPage } from "@/types/playground";

import { fetchFromServer } from "@/lib/fetch-from-server";
import Search from "@/components/tables/user-tables/search"
import { SearchProps } from "@/types/search";
import BreadCrumb from "@/components/breadcrumb";
const breadcrumbItems = [{ title: "Playground", link: "/dashboard/playground" }];
export default async function Page({ searchParams }: { searchParams?: SearchProps }) {
    const queryString = searchParams
        ? `?${new URLSearchParams(Object.entries(searchParams)).toString()}`
        : '';
    const { data }: { data: PlaygroundPage; } = await fetchFromServer(
        `/api/v1/playground/page${queryString}`,
        {
            next: {
                revalidate: 30,
            },
        },
    );
    return (
        <>
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Search queryParams={[
                    { name: 'name', placeholder: 'name' },
                ]} />
                <PlaygroundClient data={data} />
            </div>
        </>
    );
}