import { TTutorial } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const getTutorialsBySectionId = async (
  sectionId: string
): Promise<TTutorial[]> => {
  const res = await configuredAxios.get("/tutorials?sectionId=" + sectionId);
  return res.data.data;
};

const createTutorial = async (
  payload: Partial<TTutorial>
): Promise<TTutorial> => {
  const res = await configuredAxios.post("/tutorials", payload);
  return res.data.data;
};
const updateTutorial = async (
  id: string,
  payload: Partial<TTutorial>
): Promise<TTutorial> => {
  const res = await configuredAxios.put("/tutorials/" + id, payload);
  return res.data.data;
};

export const TutorialAPI = {
  getTutorialsBySectionId,
  createTutorial,
  updateTutorial,
};
