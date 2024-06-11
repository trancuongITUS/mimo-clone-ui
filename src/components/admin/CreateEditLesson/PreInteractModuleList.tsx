import {
  PrePostInteractionModuleContentType,
  SupportedCodeLanguage,
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

const PreInteractModuleList = () => {
  const [listModule, setListModule] = useState<PreInteractionModuleInput[]>([
    generateNewPreInteractionModuleInput(),
  ]);

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
