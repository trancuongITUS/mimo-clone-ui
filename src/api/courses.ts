import { data } from "./../app/user-page/data";
import { TCourse } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const getAllCourses = async (): Promise<TCourse[]> => {
  const res = await configuredAxios.get("/courses");
  return res.data.data;
};

const createCourse = async (payload: Partial<TCourse>): Promise<TCourse> => {
  const res = await configuredAxios.post("/courses", payload);
  return res.data.data;
};

export const CoursesAPI = {
  getAllCourses,
  createCourse,
};
