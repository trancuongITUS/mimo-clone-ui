"use client";
import { TInteractionModule, TInteractionOption } from "@/utils/types";
import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import eventEmitter, { EMIT_EVENT } from "@/utils/eventEmitter";

type Props = {
  module: TInteractionModule;
};

type TOption = {
  id: string;
  value: string;
};

const cutStringWithIndexAndLength = (
  str: string,
  index: number,
  length: number
): [string, string] => {
  const prefix = str.substring(0, index);
  const postfix = str.substring(index + length, str.length);
  return [prefix, postfix];
};

const renderCodeEditorBody = (
  content: string,
  interactionOption: TInteractionOption[],
  inputsValue: string[]
) => {
  let removedCodeZone = [];

  let currentPostStr = content;
  let handledStrIndex = 0;
  interactionOption.forEach((item, index) => {
    const [prefix, postfix] = cutStringWithIndexAndLength(
      currentPostStr,
      item.startIndex - handledStrIndex,
      item.length
    );

    removedCodeZone = [...removedCodeZone, prefix];
    if (index === interactionOption.length - 1)
      removedCodeZone = [...removedCodeZone, postfix];
    else {
      currentPostStr = postfix;
      handledStrIndex = handledStrIndex + prefix.length + item.length;
    }
  });

  return (
    <>
      {removedCodeZone.map((item, index) => (
        <>
          <code data-content="content" className="language-python">
            {item}
          </code>
          {index < removedCodeZone.length - 1 && (
            <input
              data-next-element="content"
              className="ml-[2px] box-border h-[20px]
                    min-w-[21px] bg-product-line-primary-dark
                    text-center font-aeonikMono text-sm text-product-text-primary-dark caret-product-text-primary-dark focus:bg-product-line-secondary-dark focus:outline-none 
                    focus:ring-product-line-secondary-dark "
              data-testid="ftg-input-0"
              value={inputsValue[index] || ""}
              style={{
                width: `calc(${inputsValue[index]?.length || 3}ch + 0px)`,
              }}
            />
          )}
        </>
      ))}
    </>
  );
};

const CodeFillTheGap = ({ module }: Props) => {
  const [pickedOption, setPickedOption] = useState<TOption[]>([]);

  const wrongOptions: string[] = useMemo(
    () => module.wrongOptions && JSON.parse(module.wrongOptions),
    [module]
  );
  const correctOptions: TOption[] = useMemo(
    () =>
      module.interactionOptions.map((item) => ({
        id: item.id,
        value: item.value,
      })),
    [module]
  );

  const options: TOption[] = useMemo(
    () => [
      ...(wrongOptions || []).map((item) => ({
        id: uuidv4(),
        value: item,
      })),
      ...correctOptions,
    ],
    [wrongOptions, correctOptions]
  );

  useEffect(() => {
    eventEmitter.emit(
      EMIT_EVENT.SUBMIT_ANSWER,
      _.xor(correctOptions, pickedOption).length === 0
    );
  }, [correctOptions, pickedOption]);

  const handlePickOption = (option) => {
    const itemIdx = pickedOption.findIndex((item) => item.id === option.id);
    if (itemIdx === -1) {
      if (pickedOption.length >= correctOptions.length) return;
      setPickedOption((prev) => [...prev, option]);
    } else {
      setPickedOption((prev) => prev.filter((item) => item.id !== option.id));
    }
  };
  return (
    <div className="relative flex flex-col">
      <div className="relative flex w-full flex-col overflow-hidden rounded-lg rounded-b-lg border-2  border-product-line-primary-dark">
        <div className="z-40 flex flex-col w-full flex-shrink-0 overflow-x-auto rounded-t-lg bg-product-background-primary-dark border-product-line-primary-dark">
          <div className="flex h-12 flex-shrink-0 flex-grow overflow-x-auto bg-product-background-primary-dark">
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
            className="mimo-editor-block-123413 overflow-y-auto bg-product-background-primary-dark text-product-text-primary-dark language-python"
            style={{ height: 220 }}
          >
            {renderCodeEditorBody(
              module.files[0].content,
              module.interactionOptions,
              pickedOption.map((item) => item.value)
            )}
          </pre>
          <div className="z-20 flex h-10 w-full flex-shrink-0 justify-between overflow-hidden border-t-2 border-product-line-primary-dark bg-product-background-primary-dark pl-4 border-product-line-primary-dark">
            <div className="flex items-center">
              <button className="flex items-center justify-center rounded-lg p-2 text-product-button-text-enabled-dark hover:bg-product2-background-tertiary">
                <svg
                  height="100%"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 text-white"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.9622 8.46C7.17738 6.39105 9.43163 5 12 5C15.8677 5 19 8.13228 19 12C19 15.8677 15.8677 19 12 19C8.73764 19 5.99729 16.7699 5.2183 13.7502C5.08034 13.2154 4.53498 12.8937 4.00021 13.0317C3.46543 13.1697 3.14374 13.715 3.2817 14.2498C4.28271 18.1301 7.80236 21 12 21C16.9723 21 21 16.9723 21 12C21 7.02772 16.9723 3 12 3C8.68198 3 5.77726 4.80317 4.22 7.47753V5.22C4.22 4.66772 3.77229 4.22 3.22 4.22C2.66772 4.22 2.22 4.66772 2.22 5.22V9.46C2.22 10.0123 2.66772 10.46 3.22 10.46H7.46C8.01229 10.46 8.46 10.0123 8.46 9.46C8.46 8.90772 8.01229 8.46 7.46 8.46H5.9622Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button className="flex items-center justify-center rounded-lg p-2 text-product-button-text-enabled-dark hover:bg-product2-background-tertiary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 text-white"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M7.255 5.475 3.508 11.47l-.002.003a.98.98 0 0 0 0 1.053l.002.004 3.747 5.995c.191.298.516.475.855.475H20c.548 0 1-.452 1-1V6c0-.548-.452-1-1-1H8.11c-.339 0-.664.177-.855.475ZM5.567 4.402A3.023 3.023 0 0 1 8.11 3H20c1.652 0 3 1.348 3 3v12c0 1.652-1.348 3-3 3H8.11a3.023 3.023 0 0 1-2.543-1.402l-.005-.008-3.748-5.996-.001-.002a2.98 2.98 0 0 1 0-3.184L5.562 4.41l.005-.008Zm12.14 3.89a1 1 0 0 1 0 1.415l-2.243 2.243 2.253 2.253a1 1 0 0 1-1.414 1.414l-2.253-2.253-2.343 2.343a1 1 0 0 1-1.414-1.414l2.343-2.343-2.333-2.333a1 1 0 0 1 1.414-1.414l2.333 2.333 2.243-2.243a1 1 0 0 1 1.414 0Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative"></div>
          </div>
        </div>
      </div>
      <div
        translate="no"
        id="lesson-ftg-solutions-block-123413"
        className="mt-8 flex flex-wrap items-center justify-center gap-y-2 space-x-4"
        data-testid="ftg-solution-items"
      >
        {options.map((item) => (
          <div className="relative" key={item.id}>
            <button
              type="button"
              className={`item-center flex justify-center space-x-2 rounded-lg border-2 px-3 py-1.5 font-aeonikMono text-sm text-product-text-primary-light hover:bg-product-line-secondary-light  classNametext-product-text-primary-dark classNamehover:bg-product-line-secondary-dark ${
                pickedOption.map((option) => option.id).includes(item.id)
                  ? "relative border-transparent bg-product-line-secondary-light dark:bg-product-line-secondary-dark"
                  : "border-product-line-primary-light border-product-line-primary-dark"
              }  `}
              onClick={() => handlePickOption(item)}
            >
              <span>{item.value}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeFillTheGap;
