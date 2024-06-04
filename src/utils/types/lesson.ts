import { SupportedCodeLanguage } from "./tutorial";
export enum InteractionModuleType {
  CODE_FILL_THE_GAP = "codeFillTheGap",
  MULTIPLE_CHOICE = "multipleChoice",
  CODE_VALIDATE_INPUT = "codeValidatedInput",
}
export type TInteractionModuleItem = {
  correct: boolean;
  id: string;
  text: string;
  value: number;
};
export type TModuleFileType = {
  codeLanguage: SupportedCodeLanguage;
  content: string;
  id: string;
  isInteractive: boolean;
  name: string;
};
export type TInteractionOption = {
  correct: boolean;
  endIndex: number;
  id: string;
  length: number;
  startIndex: number;
  startLine: number;
  startPos: number;
  value: string;
};
export type TInteractionModule = {
  id: string;
  isCode: boolean;
  files: TModuleFileType[];
  items: TInteractionModuleItem[];
  interactionOptions: TInteractionOption[];
  output: string;
  type: InteractionModuleType;
  wrongOptions: string;
};
/* ------------------------------------------------ */
export enum PrePostInteractionModuleVisibleIf {
  WRONG = "wrong",
  ALWAYS = "always",
}
export enum PrePostInteractionModuleContentType {
  PARAGRAPH = "paragraph",
  CODE_NONE = "codeNone",
}
export enum PrePostInteractionModuleType {
  POST = "Post",
  PRE = "Pre",
}
export type TPrePostInteractionModule = {
  id: string;
  content: string;
  output: string;
  visibleIf: PrePostInteractionModuleVisibleIf;
  contentType: PrePostInteractionModuleContentType;
  type: PrePostInteractionModuleType;
  files: TModuleFileType[];
};
/* ------------------------------------------------ */
export enum LessonType {
  INTERACTIVE = "Interactive",
}
export type TLesson = {
  id: string;
  index: number;
  type: LessonType;
  interactionModules: TInteractionModule[];
  prePostInteractionModules: TPrePostInteractionModule[];
};
