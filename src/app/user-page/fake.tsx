export type IChapter = {
  id: string;
  tutorialId: string;
  type: string;
  title: string;
  lessons: Array<any>;
  isComplete: boolean;
  index: number;
  // define another field in apis
};

export type ITutorial = {
  id: string;
  sectionId: string;
  bannerIconUrl: string;
  codeLanguage: string;
  descriptionContent: string;
  index: number;
  isCompleted: boolean;
  title: string;
  type: string;
  version: number;
  chapters?: Array<IChapter>;
  currentChapterIndex: number;
  chapterTotalCount: number;
  // define another field in apis
};
export type ISection = {
  id: string;
  courseId: string;
  name: string;
  isLocked: boolean;
  description: string;
  index: number;
  tutorials?: Array<ITutorial>;
  currentTutorialIndex: number;
  tutorialTotalCount: number;
  // define another field in apis
};
export type ICourseDetail = {
  id?: string;
  name: string;
  description: string;
  iconURL: string;
  sections: Array<ISection>;
  currentSectionIndex: number;
  // define another field in apis
};

//generate fake data for course detail

export const courses: ICourseDetail[] = [
  {
    name: "Web Development Fundamentals",
    description: "Learn the basics of web development from scratch.",
    iconURL: "https://example.com/icons/web-dev.png",
    sections: [
      {
        id: "section1",
        courseId: "course1",
        name: "HTML Basics",
        isLocked: false,
        description: "Introduction to HTML",
        index: 0,
        tutorials: [
          {
            id: "tutorial1",
            sectionId: "section1",
            bannerIconUrl: "https://example.com/banners/html.png",
            codeLanguage: "HTML",
            descriptionContent: "Learn the basics of HTML markup language.",
            index: 0,
            isCompleted: false,
            title: "Introduction to HTML",
            type: "text",
            version: 1,
            chapters: [
              {
                id: "chapter1",
                tutorialId: "tutorial1",
                type: "theory",
                title: "HTML Syntax",
                lessons: [],
                isComplete: false,
                index: 0,
              },
              {
                id: "chapter2",
                tutorialId: "tutorial1",
                type: "practice",
                title: "Creating Your First HTML Page",
                lessons: [],
                isComplete: false,
                index: 1,
              },
            ],
            currentChapterIndex: 0,
            chapterTotalCount: 2,
          },
        ],
        currentTutorialIndex: 0,
        tutorialTotalCount: 1,
      },
    ],
    currentSectionIndex: 0,
  },
  {
    name: "Python Programming Masterclass",
    description: "Master Python programming language with hands-on projects.",
    iconURL: "https://example.com/icons/python.png",
    sections: [
      {
        id: "section1",
        courseId: "course2",
        name: "Python Basics",
        isLocked: false,
        description: "Introduction to Python",
        index: 0,
        tutorials: [
          {
            id: "tutorial1",
            sectionId: "section1",
            bannerIconUrl: "https://example.com/banners/python.png",
            codeLanguage: "Python",
            descriptionContent:
              "Learn the basics of Python programming language.",
            index: 0,
            isCompleted: false,
            title: "Introduction to Python",
            type: "text",
            version: 1,
            chapters: [
              {
                id: "chapter1",
                tutorialId: "tutorial1",
                type: "theory",
                title: "Python Syntax",
                lessons: [],
                isComplete: false,
                index: 0,
              },
              {
                id: "chapter2",
                tutorialId: "tutorial1",
                type: "practice",
                title: "Basic Python Data Types",
                lessons: [],
                isComplete: false,
                index: 1,
              },
            ],
            currentChapterIndex: 0,
            chapterTotalCount: 2,
          },
        ],
        currentTutorialIndex: 0,
        tutorialTotalCount: 1,
      },
    ],
    currentSectionIndex: 0,
  },
  {
    name: "Data Science Fundamentals",
    description: "Learn the basics of data science and analytics.",
    iconURL: "https://example.com/icons/data-science.png",
    sections: [
      {
        id: "section1",
        courseId: "course3",
        name: "Introduction to Data Science",
        isLocked: false,
        description: "Introduction to data science concepts and tools.",
        index: 0,
        tutorials: [
          {
            id: "tutorial1",
            sectionId: "section1",
            bannerIconUrl: "https://example.com/banners/data-science.png",
            codeLanguage: "Python",
            descriptionContent: "Introduction to Python for data science.",
            index: 0,
            isCompleted: false,
            title: "Python for Data Science",
            type: "text",
            version: 1,
            chapters: [
              {
                id: "chapter1",
                tutorialId: "tutorial1",
                type: "theory",
                title: "Introduction to Python",
                lessons: [],
                isComplete: false,
                index: 0,
              },
              {
                id: "chapter2",
                tutorialId: "tutorial1",
                type: "practice",
                title: "Data Manipulation with Pandas",
                lessons: [],
                isComplete: false,
                index: 1,
              },
            ],
            currentChapterIndex: 0,
            chapterTotalCount: 2,
          },
        ],
        currentTutorialIndex: 0,
        tutorialTotalCount: 1,
      },
    ],
    currentSectionIndex: 0,
  },
  {
    name: "Machine Learning Essentials",
    description: "Learn the fundamentals of machine learning algorithms.",
    iconURL: "https://example.com/icons/machine-learning.png",
    sections: [
      {
        id: "section1",
        courseId: "course4",
        name: "Basic Concepts",
        isLocked: false,
        description: "Introduction to machine learning concepts.",
        index: 0,
        tutorials: [
          {
            id: "tutorial1",
            sectionId: "section1",
            bannerIconUrl: "https://example.com/banners/machine-learning.png",
            codeLanguage: "Python",
            descriptionContent: "Learn the basic concepts of machine learning.",
            index: 0,
            isCompleted: false,
            title: "Introduction to Machine Learning",
            type: "text",
            version: 1,
            chapters: [
              {
                id: "chapter1",
                tutorialId: "tutorial1",
                type: "theory",
                title: "Supervised Learning",
                lessons: [],
                isComplete: false,
                index: 0,
              },
              {
                id: "chapter2",
                tutorialId: "tutorial1",
                type: "practice",
                title: "Classification Algorithms",
                lessons: [],
                isComplete: false,
                index: 1,
              },
            ],
            currentChapterIndex: 0,
            chapterTotalCount: 2,
          },
        ],
        currentTutorialIndex: 0,
        tutorialTotalCount: 1,
      },
    ],
    currentSectionIndex: 0,
  },
  // Two more course details can be added here with similar structure
];
