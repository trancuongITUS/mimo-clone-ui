import { TChapter, TTutorial } from "@/utils/types";
import { configuredAxios } from "./axios.config";

const getChaptersByTutorialId = async (
  tutorialId: string
): Promise<TChapter[]> => {
  const res = await configuredAxios.get("/chapters?tutorialId=" + tutorialId);
  return res.data.data;
};

const getChaptersById = async (id: string): Promise<TChapter> => {
  const res = await configuredAxios.get("/chapters/" + id);
  return res.data.data;
};

const createChapter = async (payload: Partial<TChapter>): Promise<TChapter> => {
  const res = await configuredAxios.post("/chapters", payload);
  return res.data.data;
};

const updateChapter = async (
  id: string,
  payload: Partial<TChapter>
): Promise<TChapter> => {
  const res = await configuredAxios.put("/chapters/" + id, payload);
  return res.data.data;
};

export const ChapterAPI = {
  getChaptersByTutorialId,
  getChaptersById,
  createChapter,
  updateChapter,
};
