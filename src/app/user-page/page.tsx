"use client";
import ProtectedRouter from "@/components/ProtectedRouter";
import Layout from "@/components/common/layout";

export default function CoursesPath() {
  return (
    <ProtectedRouter>
      <Layout>
        <div className={"text-white"}>Course Path</div>
      </Layout>
    </ProtectedRouter>
  );
}
