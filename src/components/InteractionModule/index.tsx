import { InteractionModuleType, TInteractionModule } from "@/utils/types";
import React, { ReactElement } from "react";
import MultipleChoice from "./MultipleChoice";
import CodeFillTheGap from "./CodeFillTheGap";

type Props = {
  module: TInteractionModule;
};

const renderMap = (module: TInteractionModule): ReactElement => {
  switch (module.type) {
    case InteractionModuleType.MULTIPLE_CHOICE:
      return <MultipleChoice module={module} />;
    case InteractionModuleType.CODE_FILL_THE_GAP:
      return <CodeFillTheGap module={module} />;
    case InteractionModuleType.CODE_VALIDATE_INPUT:
      return <CodeFillTheGap module={module} />;

    default:
      console.log(
        "%c~ Unhandled interact module type:" + module.type,
        "font-size: 40px; color: red"
      );

      return <></>;
  }
};

const InteractModule = ({ module }: Props) => {
  return <div className="mt-8">{renderMap(module)}</div>;
};

export default InteractModule;
