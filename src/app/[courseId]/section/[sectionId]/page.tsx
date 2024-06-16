"use client";
import { SectionAPI } from "@/api/section";
import { TraceCourseAPI } from "@/api/traceCourses";
import { TutorialAPI } from "@/api/tutorials";
import DoingTutorialStatus from "@/components/DoingTutorialStatus";
import ProtectedRouter from "@/components/ProtectedRouter";
import Layout from "@/components/common/layout";
import { FinishStatus } from "@/utils/constant";
import { TSection, TTutorial, TUserCourseTrace } from "@/utils/types";
import { Tooltip } from "antd";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SectionPage() {
  const { courseId, sectionId } = useParams<{
    courseId: string;
    sectionId: string;
  }>();
  const router = useRouter();
  const pathname = usePathname();

  const [currentSection, setCurrentSection] = useState<TSection>(null);
  const [tutorials, setTutorials] = useState<TTutorial[]>([]);
  const [traceCoursesData, setTraceCoursesData] =
    useState<TUserCourseTrace>(null);

  useEffect(() => {
    const fetchTutorials = async (sectionId) => {
      const data = await TutorialAPI.getTutorialsBySectionId(sectionId);
      setTutorials(data);
    };
    fetchTutorials(sectionId);
  }, []);

  useEffect(() => {
    const fetchCurrentSection = async (id) => {
      const data = await SectionAPI.getSectionById(id);
      setCurrentSection(data);
    };

    fetchCurrentSection(sectionId);
  }, []);

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

  const getTutorialFinishStatus = (tutorial: TTutorial): FinishStatus => {
    const currentTraceSection = Number(
      traceCoursesData?.key.split("-")[0] || 0
    );
    if (currentSection?.index < currentTraceSection)
      return FinishStatus.FINISHED;

    if (currentSection?.index > currentTraceSection) return FinishStatus.DOING;
    const currentTraceTutorial =
      Number(traceCoursesData?.key.split("-")[1]) || 0;

    if (tutorial.index < currentTraceTutorial) return FinishStatus.FINISHED;

    if (tutorial.index === currentTraceTutorial) return FinishStatus.DOING;
    else return FinishStatus.DOING;
  };

  return (
    <ProtectedRouter>
      <Layout>
        <div className="w-full">
          <div className="h-[50px] sticky left-0 right-0 top-0 w-full border-y border-product2-border-secondary flex">
            <h1 className="text-white font-bold m-auto">
              {currentSection?.name}
            </h1>
          </div>
          <div className="mx-auto grid min-w-appContent max-w-7xl grid-cols-2 justify-center gap-8 px-8 pb-20 pt-10 max-w-lg">
            <div className="top-[90px] flex-1 flex-col space-y-6 self-start hidden">
              <span className="text-product2-content-secondary font-mimopro font-medium text-xs">
                SECTION PROJECT
              </span>
              <hr className="!mt-2 h-[1px] border-product2-border-secondary" />
              <div className="flex items-center justify-between">
                <p className="font-mimopro font-medium text-2xl">Bot</p>
              </div>
            </div>
            <div className="flex-1 flex-col space-y-6 col-span-2">
              <span className="text-product2-content-secondary font-medium text-xs">
                LESSONS
              </span>
              <hr className="!mt-2 h-[1px] border-product2-border-secondary"></hr>
              <div className="flex flex-col space-y-3">
                {tutorials
                  .sort((a, b) => a.index - b.index)
                  .map((item) => (
                    <>
                      {getTutorialFinishStatus(item) ===
                      FinishStatus.BLOCKING ? (
                        <Tooltip
                          title={"Finish the previous tutorial to unlock"}
                        >
                          <div
                            key={item.id}
                            className="z-10 flex w-full items-center justify-between space-x-2 rounded-xl border border-product2-border-secondary bg-product2-background-primary p-3 cursor-not-allowed hover:bg-[#4a4d85]"
                          >
                            <div className="flex items-center">
                              <p className="font-mimopro font-normal text-xs min-w-[24px] self-start leading-6 text-product2-content-secondary ">
                                0{item.index + 1}
                              </p>
                              <p className="font-mimopro font-medium text-base text-product2-content-secondary">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </Tooltip>
                      ) : (
                        <div
                          key={item.id}
                          className="z-10 flex w-full items-center justify-between space-x-2 rounded-xl border border-product2-border-secondary bg-product2-background-primary p-3 cursor-pointer hover:bg-[#4a4d85]"
                          onClick={() => {
                            router.push(pathname + `/tutorial/${item.id}`);
                          }}
                        >
                          <div className="flex items-center">
                            <p className="font-mimopro font-normal text-xs min-w-[24px] self-start leading-6 text-product2-content-secondary ">
                              0{item.index + 1}
                            </p>
                            <p className="font-mimopro font-medium text-base text-product2-content-secondary">
                              {item.title}
                            </p>
                          </div>
                          {getTutorialFinishStatus(item) ===
                          FinishStatus.FINISHED ? (
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-product2-purple-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-4 w-4 text-product2-content-inverse"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="square"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19.905 6.405 9 17.302l-4.177-4.177"
                                ></path>
                              </svg>
                            </div>
                          ) : (
                            <DoingTutorialStatus
                              doingChapter={
                                Number(traceCoursesData?.key.split("-")[2]) || 0
                              }
                              tutorial={item}
                            />
                          )}
                        </div>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRouter>
  );
}
