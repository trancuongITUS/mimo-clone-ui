"use client";
import { ChapterAPI } from "@/api/chapters";
import { TraceCourseAPI } from "@/api/traceCourses";
import ProtectedRouter from "@/components/ProtectedRouter";
import { TChapter, TUserCourseTrace } from "@/utils/types";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ChapterPage = () => {
  const { tutorialId, courseId } = useParams<{
    courseId: string;
    sectionId: string;
    tutorialId: string;
  }>();
  const router = useRouter();
  const pathname = usePathname();

  const [traceCoursesData, setTraceCoursesData] =
    useState<TUserCourseTrace>(null);
  const [chapterList, setChapterList] = useState<TChapter[]>(null);

  useEffect(() => {
    const fetchTraceCourse = async (courseId: string) => {
      let data = await TraceCourseAPI.getTraceCourse(courseId);
      if (!data) {
        data = await TraceCourseAPI.createTraceCourse({
          key: "0-0-0",
          isFavourite: false,
          courseId,
        });
      }

      setTraceCoursesData(data);
    };
    fetchTraceCourse(courseId);
  }, [courseId]);

  useEffect(() => {
    const fetchChapterList = async (tutorialId) => {
      const res = await ChapterAPI.getChaptersByTutorialId(tutorialId);
      // router.push(pathname + `/chapter/${res[0].id}?lesson=0`);
      setChapterList(res);
    };
    fetchChapterList(tutorialId);
  }, []);

  useEffect(() => {
    if (!chapterList || !traceCoursesData) return;
    router.push(
      pathname +
        `/chapter/${
          (
            chapterList[Number(traceCoursesData.key.split("-")[2])] ||
            chapterList[0]
          ).id
        }?lesson=0`
    );
  }, [chapterList, traceCoursesData]);

  return (
    <ProtectedRouter>
      <></>
    </ProtectedRouter>
  );
};

export default ChapterPage;
