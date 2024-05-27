import { TCoursePath } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const getAllCoursesPath = async (): Promise<TCoursePath[]> => {
  const res = await configuredAxios.get("/courses");
  return res.data.data;
};

export const CoursesPathAPI = {
  getAllCoursesPath,
};
