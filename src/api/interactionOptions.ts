import { TInteractionOption, TModuleFileType } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const createInteractionOption = async (
  payload: Partial<TInteractionOption>
): Promise<TInteractionOption> => {
  const res = await configuredAxios.post("/interactionOptions", payload);
  return res.data.data;
};

export const InteractionOptionAPI = {
  createInteractionOption,
};
