import eventEmitter, { EMIT_EVENT } from "@/utils/eventEmitter";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

export enum AnswerGuideMode {
  CORRECT = "CORRECT",
  WRONG = "WRONG",
  NONE = "NONE",
}

const AnswerGuide = () => {
  const [mode, setMode] = useState<AnswerGuideMode>(AnswerGuideMode.NONE);
  const [content, setContent] = useState<string>("");

  const handleChangeAnswerGuide = (props: {
    mode: AnswerGuideMode;
    content?: string;
  }) => {
    setMode(props.mode);
    setContent(props.content || "");
  };

  useEffect(() => {
    eventEmitter.on(EMIT_EVENT.SHOW_ANSWER_GUIDE, handleChangeAnswerGuide);
  }, []);

  return (
    <>
      {mode === AnswerGuideMode.NONE ? (
        <></>
      ) : (
        <>
          {mode === AnswerGuideMode.CORRECT ? (
            <div
              className="absolute flex w-full rounded-lg border border-product-line-active-light bg-product-background-secondary-light py-4 pl-5 pr-4 text-sm text-product-text-primary-light dark:border-product-line-active-dark dark:bg-product-background-secondary-dark dark:text-product-text-primary-dark z-10 bottom-0 "
              style={{
                bottom: "-32px",
                opacity: "1",
                transform: "translateY(100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-3 flex h-5 w-5 flex-shrink-0 self-start text-product-line-active-light dark:text-product-line-active-dark"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.905 6.405 9 17.302l-4.177-4.177"
                ></path>
              </svg>
              <div>
                <Markdown>{content}</Markdown>
              </div>
            </div>
          ) : (
            <div
              className="absolute flex w-full justify-between gap-4 rounded-lg border border-product-error-default-light bg-product-background-secondary-light py-4 pl-5 pr-4 text-sm text-product-text-primary-light dark:border-product-error-default-dark dark:bg-product-background-secondary-dark dark:text-product-text-primary-dark z-10 bottom-0"
              style={{
                bottom: "-32px",
                opacity: "1",
                transform: "translateY(100%)",
              }}
            >
              <div className="flex">
                <svg
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 flex h-5 w-5 flex-shrink-0 self-start text-product-error-default-light dark:text-product-error-default-dark"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.121 12L19.5 6.621C20.086 6.035 20.086 5.086 19.5 4.5C18.914 3.914 17.965 3.914 17.379 4.5L12 9.879L6.62105 4.5C6.03505 3.914 5.08605 3.914 4.50005 4.5C3.91405 5.086 3.91405 6.035 4.50005 6.621L9.87905 12L4.50005 17.379C3.91405 17.965 3.91405 18.914 4.50005 19.5C5.08605 20.086 6.03505 20.086 6.62105 19.5L12 14.121L17.379 19.5C17.965 20.086 18.914 20.086 19.5 19.5C20.086 18.914 20.086 17.965 19.5 17.379L14.121 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>
                  <Markdown>{content}</Markdown>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AnswerGuide;
