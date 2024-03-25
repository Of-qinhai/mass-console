import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { users } from "@/constants/data";
import { UserPage } from "@/types/user";

import { fetchFromServer } from "@/lib/fetch-from-server";
const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default async function page() {
	const {
		data,
	}: {
		data: UserPage;
	} = await fetchFromServer(
		`/api/v1/user/page`,
		{
			next: {
				revalidate: 30,
			},
		},
	);
	console.log("[userres]", data)

	return (
		<>
			<div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
				<BreadCrumb items={breadcrumbItems} />
				<UserClient data={data} />
			</div>
		</>
	);
}
