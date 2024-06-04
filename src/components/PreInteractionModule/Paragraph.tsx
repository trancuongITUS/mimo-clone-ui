import { TPrePostInteractionModule } from "@/utils/types";
import React from "react";
import Markdown from "react-markdown";

type Props = {
  module: TPrePostInteractionModule;
};

const ModulePost = ({ module }: Props) => {
  return <Markdown className="text-white">{module?.content}</Markdown>;
};

export default ModulePost;
