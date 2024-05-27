export enum SectionType {
  COURSE = "course",
  PRACTICE_REQUIRED = "practiceRequired",
  PRACTICE_OPTIONAL = "practiceOptional",
}

export enum SupportedCodeLanguage {
  PYTHON = "python",
  JAVASCRIPT = "javascript",
  HTML = "html",
}

export type TSection = {
  id: string;
  sectionId: string;
  bannerIconUrl: string;
  codeLanguage: SupportedCodeLanguage;
  descriptionContent: string;
  index: number;
  title: string;
  type: SectionType;
};
