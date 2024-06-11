import { TPrePostInteractionModule } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const createPrePostInteractionModules = async (
  payload: Partial<TPrePostInteractionModule>
): Promise<TPrePostInteractionModule> => {
  const res = await configuredAxios.post("/prePostInteractionModules", payload);
  return res.data.data;
};

export const PrePostInteractionModuleAPI = {
  createPrePostInteractionModules,
};
