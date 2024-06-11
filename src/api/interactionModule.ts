import { TInteractionModule } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const createInteractionModule = async (
  payload: Partial<TInteractionModule>
): Promise<TInteractionModule> => {
  const res = await configuredAxios.post("/interactionModules", payload);
  return res.data.data;
};

export const InteractModuleAPI = {
  createInteractionModule,
};
