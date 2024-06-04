import eventEmitter, { EMIT_EVENT } from "@/utils/eventEmitter";
import { TInteractionModule, TInteractionModuleItem } from "@/utils/types";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

type Props = {
  module: TInteractionModule;
};

const MultipleChoice = ({ module }: Props) => {
  const [selectedItem, setSelectedItem] =
    useState<TInteractionModuleItem>(null);

  useEffect(() => {
    eventEmitter.emit(EMIT_EVENT.SUBMIT_ANSWER, selectedItem?.correct);
  }, [selectedItem]);

  return (
    <>
      <div className="flex w-full flex-col space-y-3">
        {module.items.map((item, index) => (
          <div key={item.id}>
            <div className="relative">
              <div
                className={`flex w-full cursor-pointer items-center space-x-4 rounded-lg border-2 border-transparent px-3 py-1 text-left text-sm leading-6 drop-shadow-md hover:border-product-line-active-light hover:border-product-line-active-dark bg-product-card-enabled-dark cursor-pointer ${
                  selectedItem?.id === item.id
                    ? "!bg-product-card-pressed-dark !border-product-line-active-dark"
                    : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <span className="box-border rounded border border-product-text-secondary-light p-1 text-xs leading-[10px] text-product-text-secondary-light dark:border-product-text-secondary-dark dark:text-product-text-secondary-dark">
                  {index + 1}
                </span>
                <Markdown className="text-white">{item.text}</Markdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultipleChoice;
