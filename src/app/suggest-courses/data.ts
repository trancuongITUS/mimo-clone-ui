export const data_suggest_courses = {
  question: [
    {
      index: 0,
      preInteractionModules: [
        {
          type: "paragraph",
          content:
            "Welcome! We are Code Kids. I'll be your companion throughout your coding journey.",
          visibleIf: "always",
        },
        {
          type: "paragraph",
          content: "Coding is one of the best skill to have in 2024.",
          visibleIf: "always",
        },
      ],
      interactionModule: null,
    },
    {
      index: 1,
      preInteractionModules: [
        {
          type: "paragraph",
          content: "I'm curios. What shall I call you?",
          visibleIf: "always",
        },
      ],
      interactionModule: {
        type: "codeFillTheGap",
        content: "Type your first name",
      },
    },
    {
      index: 2,
      preInteractionModules: [
        {
          type: "paragraph",
          content: "What motivate you to learn to code?",
          visibleIf: "always",
        },
      ],
      interactionModule: {
        type: "buttonChoose",
        items: [
          {
            type: "button",
            content: "Just for fun",
            visibleIf: "always",
          },
          {
            type: "button",
            content: "I want to be a professional developer",
            visibleIf: "always",
          },
          {
            type: "button",
            content: "I want to be better at my current job",
            visibleIf: "always",
          },
          {
            type: "button",
            content: "I have a different reason",
            visibleIf: "always",
          },
        ],
      },
    },
    {
      index: 3,
      preInteractionModules: [
        {
          type: "paragraph",
          content: "What do you find most interesting?",
          visibleIf: "always",
        },
      ],
      interactionModule: {
        type: "buttonSelect",
        items: [
          {
            type: "button",
            content: "Build web apps",
            courses: "Javascript",
            visibleIf: "always",
          },
          {
            type: "button",
            content: "Building games",
            courses: "Javascript",
            visibleIf: "always",
          },
          {
            type: "button",
            content: "Automating tasks",
            courses: "Python",
            visibleIf: "always",
          },
          {
            type: "button",
            content: "Data science",
            courses: "Javascript",
            visibleIf: "always",
          },
          {
            type: "button",
            content: "AI /  Machine learning",
            courses: "Python",
            visibleIf: "always",
          },
          {
            type: "button",
            content: "I'm not sure",
            courses: "Python",
            visibleIf: "always",
          },
        ],
      },
    },
    {
      index: 4,
      preInteractionModules: [
        {
          type: "paragraph",
          content: "Nice! It is the good choice for beginer.",
          visibleIf: "always",
        },
        {
          type: "image",
          src: "https://tenten.vn/tin-tuc/wp-content/uploads/2022/08/Lam-dep-code.jpg",
          visibleIf: "always",
        },
      ],
      interactionModule: {
        type: "buttonDone",
        items: [
          {
            type: "button",
            content: "Start with ",
            visibleIf: "always",
          },
        ],
      },
    },
  ],
};

export default data_suggest_courses;
