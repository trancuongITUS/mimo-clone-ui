/* eslint-disable @next/next/no-img-element */
import { CoursesAPI } from "@/api/courses";
import { SectionAPI } from "@/api/section";
import { TCourse, TSection } from "@/utils/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

enum MODE {
  COURSE = "COURSE",
  SECTION = "SECTION",
}

const SideBar = () => {
  const { courseId, sectionId } = useParams<{
    courseId: string;
    sectionId: string;
  }>();
  const router = useRouter();

  const [allCourses, setAllCourses] = useState<TCourse[]>([]);
  const [sections, setSections] = useState<TSection[]>([]);
  const [mode, setMode] = useState<MODE>(MODE.COURSE);
  const [pickedCourse, setPickedCourse] = useState<TCourse>(null);

  useEffect(() => {
    const fetchAllCoursesPath = async () => {
      const res = await CoursesAPI.getAllCourses();
      setAllCourses(res);
      if (!courseId || res.findIndex((item) => item.id === courseId) === -1) {
        router.push("/" + res[0].id);
      }
      setPickedCourse(res[0]);
    };
    fetchAllCoursesPath();
  }, []);

  useEffect(() => {
    const fetchSectionByCourseId = async (courseId: string) => {
      const res = await SectionAPI.getSectionsByCourseID(courseId);
      setSections(res);
    };

    if (pickedCourse) fetchSectionByCourseId(pickedCourse.id);
  }, [pickedCourse]);

  return (
    <div className="border-r border-product2-border-secondary min-h-full flex flex-col items-start space-y-3 p-2 w-[400px] border-t">
      <div
        className={
          mode === MODE.COURSE ? "animate-enter-delay" : "animate-leave"
        }
      >
        <div className="flex flex-col items-start space-y-3 px-2 w-full">
          <div className="flex h-8 items-center justify-center rounded-lg px-1 hover:bg-product2-background-tertiary">
            <svg
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              onClick={() => {
                setMode(MODE.SECTION);
              }}
            >
              <path
                d="M21.0002 11.25H5.31018L10.5302 6.03L9.47018 4.97L3.32518 11.115C2.84018 11.6 2.84018 12.395 3.32518 12.885L9.47018 19.03L10.5302 17.97L5.31018 12.75H21.0002V11.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="font-medium text-xs text-product2-content-secondary">
            COURSES
          </h2>

          {allCourses.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setPickedCourse(item);
                setMode(MODE.SECTION);
              }}
              className={
                "flex w-full cursor-pointer flex-col space-y-2 rounded-xl  bg-product2-background-secondary px-3 py-4 shadow border border-product2-border-secondary hover:bg-[#4a4d85] w-full " +
                (item.id === courseId
                  ? "!border-2 !border-product2-border-accentLight !bg-product2-background-tertiary"
                  : "")
              }
            >
              <img src={item.iconUrl} alt=""></img>
              <p className="font-medium text-base text-product2-content-primary">
                {item.name}
              </p>
              <p className="font-normal text-sm text-product2-content-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          "overflow-hidden transition-all w-[400px] " +
          (mode === MODE.SECTION ? "animate-enter-delay" : "animate-leave")
        }
      >
        <div className="mb-4 flex max-w-[450px] flex-col gap-4 space-y-8 px-6 pt-6 w-full">
          <div className="flex flex-col space-y-2">
            <div className="font-mimopro font-medium text-xs text-product2-content-secondary">
              COURSE
            </div>
            <div
              className="-mx-3 flex items-center justify-between rounded-lg px-3 py-[6px] hover:bg-[#4a4d85] cursor-pointer"
              onClick={() => {
                setMode(MODE.COURSE);
              }}
            >
              <h2 className="font-mimopro font-medium text-xl">
                {pickedCourse?.name}
              </h2>
              <svg
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.9393 6.5L15.9696 3.53033L17.0303 2.46967L20.9267 6.36611C21.4149 6.85426 21.4149 7.64572 20.9267 8.13388L17.0303 12.0303L15.9696 10.9697L18.9393 8H5.74992C5.05957 8 4.49992 8.55964 4.49992 9.25V11H2.99992V9.25C2.99992 7.73121 4.23114 6.5 5.74992 6.5H18.9393ZM5.06058 17.5L8.03025 20.4697L6.96959 21.5303L3.07315 17.6339C2.58499 17.1457 2.58499 16.3543 3.07315 15.8661L6.96959 11.9697L8.03025 13.0303L5.06058 16H18.2499C18.9403 16 19.4999 15.4404 19.4999 14.75V13H20.9999V14.75C20.9999 16.2688 19.7687 17.5 18.2499 17.5H5.06058Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <p className="font-mimopro font-medium text-xs text-product2-content-secondary">
              SECTIONS
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-1 px-3 pb-6">
          {sections.map((item, index) => (
            <div
              key={item.id}
              className={
                "flex w-full items-center rounded-xl border py-2.5 pl-3 pr-2 hover:bg-[#333661] border-transparent cursor-pointer " +
                (item.id === sectionId
                  ? "!border-product2-border-secondary !bg-product-background-secondary-dark"
                  : "")
              }
              onClick={() => {
                router.push(`/${pickedCourse.id}/section/${item.id}`);
              }}
            >
              <div className="flex w-full items-start justify-between">
                <div className="flex items-start space-x-1">
                  <p className="font-mimopro font-medium text-sm leading-6 text-product2-content-secondary">
                    0{index + 1}.
                  </p>
                  <p className="font-mimopro font-medium text-sm leading-6">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
