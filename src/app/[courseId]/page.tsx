"use client";
import { SectionAPI } from "@/api/section";
import ProtectedRouter from "@/components/ProtectedRouter";
import Layout from "@/components/common/layout";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CoursesPath() {
  const { courseId } = useParams<{ courseId: string }>();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchSectionByCourseId = async (courseId: string) => {
      const res = await SectionAPI.getSectionsByCourseID(courseId);
      router.push(pathname + "/section/" + res[0].id);
    };
    fetchSectionByCourseId(courseId);
  }, []);

  return (
    <ProtectedRouter>
      <Layout>
        <div className={"text-white"}>{courseId}</div>
      </Layout>
    </ProtectedRouter>
  );
}
