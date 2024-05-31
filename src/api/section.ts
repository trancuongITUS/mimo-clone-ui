import { TSection } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const getSectionsByCourseID = async (courseId: string): Promise<TSection[]> => {
  const res = await configuredAxios.get("/sections?courseId=" + courseId);
  return res.data.data;
};

const getSectionById = async (id: string): Promise<TSection> => {
  const res = await configuredAxios.get("/sections/" + id);
  return res.data.data;
};

export const SectionAPI = {
  getSectionsByCourseID,
  getSectionById,
};
