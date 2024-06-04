import { TLesson } from "./lesson";

export type TChapter = {
  id: string;
  index: number;
  title: string;
  type: string;
  lessons: TLesson[];
};
