import { TModuleFileType } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const createFile = async (
  payload: Partial<TModuleFileType>
): Promise<TModuleFileType> => {
  const res = await configuredAxios.post("/files", payload);
  return res.data.data;
};

export const FileAPI = {
  createFile,
};
