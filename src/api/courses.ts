import { TCourse } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const getAllCourses = async (): Promise<TCourse[]> => {
  const res = await configuredAxios.get("/courses");
  return res.data.data;
};

export const CoursesAPI = {
  getAllCourses,
};
