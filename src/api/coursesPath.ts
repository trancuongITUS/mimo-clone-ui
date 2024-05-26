import { configuredAxios } from "./axios.config";

const getAllCoursesPath = async () => {
  const res = await configuredAxios.get("/courses");
  return res.data;
};

export const CoursesPathAPI = {
  getAllCoursesPath,
};
