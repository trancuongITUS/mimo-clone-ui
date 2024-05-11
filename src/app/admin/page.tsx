import { Layout } from "@/components/admin/layout";
import { SearchBar } from "@/components/admin/search";
import { UsersTable } from "@/components/admin/user-table";
import { usersData } from "@/components/admin/static-data";

export default async function Admin({params}: {params: {q: string}}) {
    const search = params.q ?? ''; // Use this to query to db
    const users = usersData;
    const newOffset = 0;
    return(
      <div>
        <Layout>
          <div className="flex min-h-screen flex-1 flex-col p-4">
            <div className="flex items-center mb-8">
              <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
            </div>
            <div className="w-full mb-4">
              <SearchBar value={params.q} />
            </div>
            <UsersTable users={users} offset={newOffset} />
          </div>
        </Layout>
      </div>
    )
}