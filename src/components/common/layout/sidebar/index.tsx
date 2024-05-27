/* eslint-disable @next/next/no-img-element */
import { CoursesPathAPI } from "@/api/coursesPath";
import { TCoursePath } from "@/utils/types";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [allCoursesPath, setAllCoursesPath] = useState<TCoursePath[]>([]);
  useEffect(() => {
    const fetchAllCoursesPath = async () => {
      const res = await CoursesPathAPI.getAllCoursesPath();
      setAllCoursesPath(res);
    };
    fetchAllCoursesPath();
  }, []);
  return (
    <div className="border-r border-product2-border-secondary min-h-full flex flex-col items-start space-y-3 p-2 ">
      <div className="flex flex-col items-start space-y-3 px-2 w-full">
        <div className="flex h-8 items-center justify-center rounded-lg px-1 hover:bg-product2-background-tertiary">
          <svg
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
          >
            <path
              d="M21.0002 11.25H5.31018L10.5302 6.03L9.47018 4.97L3.32518 11.115C2.84018 11.6 2.84018 12.395 3.32518 12.885L9.47018 19.03L10.5302 17.97L5.31018 12.75H21.0002V11.25Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="font-medium text-xs text-product2-content-secondary">
          CAREER PATHS
        </h2>
        {allCoursesPath.map((item) => (
          <div
            key={item.id}
            className="flex w-full cursor-pointer flex-col space-y-2 rounded-xl  bg-product2-background-secondary px-3 py-4 shadow border border-product2-border-secondary hover:bg-[#4a4d85] w-full"
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
  );
};

export default SideBar;
