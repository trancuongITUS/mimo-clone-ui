import { Layout } from "@/components/admin/layout";
import { SearchBar } from "@/components/admin/search";
import { UsersTable } from "@/components/admin/user-table";

import styles from "./index.module.css";
import { User } from "@/components/admin/user-table";
import { generateRandomUser } from "@/components/admin/utils";

export default function Admin() {
  const users: User[] = [];
  for (let i = 1; i <= 45; i++) {
    users.push(generateRandomUser(i));
  }
  const newOffset = 0;
  return (
    <div>
      <Layout>
        <div className="flex min-h-screen flex-1 flex-col p-4">
          <div className="flex items-center mb-8">
            <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
          </div>
          <div className="w-full mb-4">
            <SearchBar />
          </div>
          <UsersTable users={users} offset={newOffset} />
        </div>
      </Layout>
    </div>
  );
}
