import { TLesson } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const createLesson = async (payload: Partial<TLesson>): Promise<TLesson> => {
  const res = await configuredAxios.post("/lessons", payload);
  return res.data.data;
};

export const LessonAPI = { createLesson };
