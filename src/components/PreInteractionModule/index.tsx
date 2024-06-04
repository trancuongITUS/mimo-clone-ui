import {
  PrePostInteractionModuleContentType,
  PrePostInteractionModuleType,
  TPrePostInteractionModule,
} from "@/utils/types";
import React, { ReactElement } from "react";
import Paragraph from "./Paragraph";
import CodeNone from "./CodeNone";

type Props = {
  modulePost: TPrePostInteractionModule;
};

const renderMap = (modulePost: TPrePostInteractionModule): ReactElement => {
  switch (modulePost.contentType) {
    case PrePostInteractionModuleContentType.PARAGRAPH:
      return <Paragraph module={modulePost} />;
    case PrePostInteractionModuleContentType.CODE_NONE:
      return <CodeNone module={modulePost} />;
    default:
      console.log(
        "%c~ Unhandled content type:" + modulePost.contentType,
        "font-size: 40px; color: red"
      );

      return <></>;
  }
};

const PrePostInteractionModule = ({ modulePost }: Props) => {
  return renderMap(modulePost);
};

export default PrePostInteractionModule;
