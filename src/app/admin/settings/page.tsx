import ProtectedAdminRouter from "@/components/ProtectedAdminRouter";
import { Layout } from "@/components/admin/layout";

export default function Setting() {
  return (
    <ProtectedAdminRouter>
      <div>
        <Layout></Layout>
      </div>
    </ProtectedAdminRouter>
  );
}
