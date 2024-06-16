import {
  PrePostInteractionModuleContentType,
  SupportedCodeLanguage,
  TPrePostInteractionModule,
} from "@/utils/types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PreInteractionModule from "./PreInteractModule";
import { Button, Divider } from "antd";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export type PreInteractionModuleInput = {
  contentType: PrePostInteractionModuleContentType;
  id: string;
  codeLanguage: SupportedCodeLanguage;
  paragraphContent: string;
  codeFileName: string;
  codeContent: string;
};

const generateNewPreInteractionModuleInput = (): PreInteractionModuleInput => ({
  id: uuidv4(),
  contentType: PrePostInteractionModuleContentType.PARAGRAPH,
  codeLanguage: SupportedCodeLanguage.PYTHON,
  paragraphContent: "",
  codeFileName: "",
  codeContent: "",
});

type Props = {
  defaultPreInteractModule?: TPrePostInteractionModule[];
};

const prePostInteractionModuleToPreInteractionModuleInput = (
  input: TPrePostInteractionModule
): PreInteractionModuleInput => {
  if (input.contentType === PrePostInteractionModuleContentType.PARAGRAPH) {
    return {
      id: input.id,
      contentType: PrePostInteractionModuleContentType.PARAGRAPH,
      paragraphContent: input.content,
      codeFileName: "",
      codeContent: "",
      codeLanguage: SupportedCodeLanguage.PYTHON,
    };
  } else if (
    input.contentType === PrePostInteractionModuleContentType.CODE_NONE
  ) {
    return {
      id: input.id,
      contentType: PrePostInteractionModuleContentType.CODE_NONE,
      paragraphContent: "",
      codeFileName: input.files[0].name,
      codeContent: input.files[0].content,
      codeLanguage: input.files[0].codeLanguage,
    };
  }
};
const PreInteractModuleList = ({ defaultPreInteractModule }: Props) => {
  const [listModule, setListModule] = useState<PreInteractionModuleInput[]>(
    defaultPreInteractModule
      ? defaultPreInteractModule
          .map((item) =>
            prePostInteractionModuleToPreInteractionModuleInput(item)
          )
          .filter((item) => item)
      : [generateNewPreInteractionModuleInput()]
  );

  return (
    <>
      {listModule.map((item, index) => (
        <div key={item.id}>
          <Divider orientation="left" plain>
            {index + 1}
          </Divider>
          <PreInteractionModule defaultModule={item} />
        </div>
      ))}
      <div className="flex justify-center">
        <Button
          icon={<AddCircleOutlineRoundedIcon></AddCircleOutlineRoundedIcon>}
          style={{ width: "25%" }}
          onClick={() =>
            setListModule((prev) => [
              ...prev,
              generateNewPreInteractionModuleInput(),
            ])
          }
        ></Button>
      </div>
    </>
  );
};

export default PreInteractModuleList;
