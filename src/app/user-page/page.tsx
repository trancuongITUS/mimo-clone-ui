"use client";
import ProtectedRouter from "@/components/ProtectedRouter";
import Header from "@/components/common/layout/header";
import Layout from "@/components/common/layout";

export interface CoursePathProps {}

export default function CoursesPath(props: CoursePathProps) {
  return (
    <ProtectedRouter>
      <Layout>
        <div className={"text-white"}>Course Path</div>
      </Layout>
    </ProtectedRouter>
  );
}
