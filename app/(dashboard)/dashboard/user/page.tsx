import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { UserPage } from "@/types/user";

import { fetchFromServer } from "@/lib/fetch-from-server";
import Search from "@/components/tables/user-tables/search"
import { SearchProps } from "@/types/search";
const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default async function page({ searchParams }: { searchParams?: SearchProps }) {
	const queryString = searchParams
		? `?${new URLSearchParams(Object.entries(searchParams)).toString()}`
		: '';
	const { data }: { data: UserPage; } = await fetchFromServer(
		`/api/v1/user/page${queryString}`,
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
					{ name: 'email', placeholder: 'email' },
				]} />
				<UserClient data={data} />
			</div>
		</>
	);
}
