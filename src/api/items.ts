import { TInteractionModuleItem, TModuleFileType } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const createItem = async (
  payload: Partial<TInteractionModuleItem>
): Promise<TInteractionModuleItem> => {
  const res = await configuredAxios.post("/items", payload);
  return res.data.data;
};

export const ItemsAPI = {
  createItem,
};
