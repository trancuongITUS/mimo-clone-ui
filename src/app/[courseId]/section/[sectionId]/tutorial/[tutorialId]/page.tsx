"use client";
import { ChapterAPI } from "@/api/chapters";
import ProtectedRouter from "@/components/ProtectedRouter";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ChapterPage = () => {
  const { tutorialId } = useParams<{
    courseId: string;
    sectionId: string;
    tutorialId: string;
  }>();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchChapterList = async (tutorialId) => {
      const res = await ChapterAPI.getChaptersByTutorialId(tutorialId);
      router.push(pathname + `/chapter/${res[0].id}?lesson=0`);
    };
    fetchChapterList(tutorialId);
  }, []);
  return (
    <ProtectedRouter>
      <></>
    </ProtectedRouter>
  );
};

export default ChapterPage;
