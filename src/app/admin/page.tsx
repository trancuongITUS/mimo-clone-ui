import { Layout } from "@/components/admin/layout";
import { SearchBar } from "@/components/admin/search";
import { UsersTable } from "@/components/admin/user-table";

import styles from "./index.module.css";
import { User } from "@/components/admin/user-table";
import { generateRandomUser } from "@/components/admin/utils";
import ProtectedAdminRouter from "@/components/ProtectedAdminRouter";

export default function Admin() {
  const users: User[] = [];
  for (let i = 1; i <= 45; i++) {
    users.push(generateRandomUser(i));
  }
  const newOffset = 0;
  return (
    <ProtectedAdminRouter>
      <div>
        <Layout>
          <div className="flex min-h-screen flex-1 flex-col p-4 w-full">
            <div className="w-full mb-4 mt-16">
              <SearchBar />
            </div>
            <UsersTable users={users} offset={newOffset} />
          </div>
        </Layout>
      </div>
    </ProtectedAdminRouter>
  );
}
