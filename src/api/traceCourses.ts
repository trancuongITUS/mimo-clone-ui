import { TUserCourseTrace } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const getTraceCourse = async (courseId: string): Promise<TUserCourseTrace> => {
  const res = await configuredAxios.get("/trace-course/" + courseId);
  return res.data.data;
};

const createTraceCourse = async (
  payload: Partial<TUserCourseTrace>
): Promise<TUserCourseTrace> => {
  const res = await configuredAxios.post("/trace-course", payload);
  return res.data.data;
};

const updateTraceCourse = async (
  payload: Partial<TUserCourseTrace>
): Promise<TUserCourseTrace> => {
  const res = await configuredAxios.put("/trace-course/" + payload.id, payload);
  return res.data.data;
};

export const TraceCourseAPI = {
  getTraceCourse,
  createTraceCourse,
  updateTraceCourse,
};
