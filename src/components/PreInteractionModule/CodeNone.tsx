import { TPrePostInteractionModule } from "@/utils/types";
import React from "react";

type Props = {
  module: TPrePostInteractionModule;
};

const CodeNone = ({ module }: Props) => {
  return (
    <div className="translate-[z-0] relative flex w-full transform flex-col overflow-hidden rounded-lg border-2 border-product-line-primary-light dark:border-product-line-primary-dark">
      <div
        translate="no"
        className="flex h-12 flex-shrink-0 flex-grow overflow-x-auto bg-product-background-primary-dark"
      >
        {module.files?.map((file) => (
          <button
            className="mb-[-2px] flex h-full items-center justify-center space-x-2 whitespace-nowrap border-b-2 px-4 text-xs font-semibold hover:bg-product-background-secondary-dark border-product-line-active-light text-product-text-primary-dark"
            key={file.id}
          >
            <div>
              <svg
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M11.93 2C6.85 2 7.17 4.21 7.17 4.21V6.5h4.85v.69H5.25S2 6.82 2 11.97s2.84 4.97 2.84 4.97h1.69v-2.39s-.09-2.85 2.79-2.85h4.81s2.7.04 2.7-2.62V4.67S17.24 2 11.93 2zM8.39 4.42c0-.49.39-.88.87-.88s.87.39.87.87c0 .49-.39.88-.87.88a.87.87 0 01-.87-.87z"
                  fill="#1E96FF"
                ></path>
                <path
                  d="M19.16 7.06h.04c.33 0 2.8.16 2.8 4.95v.03c0 5.14-3.25 4.77-3.25 4.77h-6.77v.69h4.85v2.29S17.15 22 12.08 22c-5.31 0-4.9-2.67-4.9-2.67v-4.41c0-2.67 2.7-2.62 2.7-2.62h4.81c2.88 0 2.79-2.85 2.79-2.85V7.06h1.69-.01zm-5.29 12.52c0 .48.39.87.87.87s.87-.39.87-.88-.39-.88-.87-.88-.87.39-.87.88v.01z"
                  fill="#FFBE09"
                ></path>
              </svg>
            </div>
            <div className="text-white">{file.name}</div>
          </button>
        ))}
        <div className="h-full flex-grow border-b-2 border-product-line-primary-dark"></div>
      </div>
      <pre
        className="mimo-editor-block-123410 min-h-[200px] overflow-y-auto bg-product-background-primary-dark text-product-text-primary-dark language-python"
        style={{ height: 220 }}
      >
        <code className="language-python">{module.files[0].content}</code>
      </pre>
    </div>
  );
};

export default CodeNone;
