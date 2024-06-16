import { Button, Divider, Select, Space, Tooltip } from "antd";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import {
  InteractionModuleType,
  SupportedCodeLanguage,
  TInteractionModule,
  TInteractionOption,
} from "@/utils/types";
import Input from "@/components/styledComponents/Input";
import Textarea from "@/components/styledComponents/TextArea";
import { CodeLanguageOption } from "@/app/admin/courses/[courseId]/section/[sectionId]/tutorial/CreateTutorialModal";
import {
  addUniqueListener,
  removeUniqueListener,
} from "@/utils/eventEmitterIUtils";
import { EMIT_EVENT } from "@/utils/eventEmitter";
import { InteractModuleAPI } from "@/api/interactionModule";
import { InteractionOptionAPI } from "@/api/interactionOptions";
import { FileAPI } from "@/api/files";
import InputContentMultipleChoice, {
  TInputContentMultipleChoice,
} from "./InputContentMultipleChoice";
import { v4 as uuidv4 } from "uuid";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { ItemsAPI } from "@/api/items";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function extractInteractionOptions(
  text: string
): Partial<TInteractionOption>[] {
  const regex = /""".*?"""/gs;
  const matches = text.match(regex) || [];
  const options: Partial<TInteractionOption>[] = [];

  matches.forEach((match, index) => {
    const startPos = text.indexOf(match);
    const endPos = startPos + match.length;
    const startLine = text.substring(0, startPos).split("\n").length;
    const startIndex = startPos;
    const endIndex = endPos;
    const value = match.slice(3, -3); // remove the triple quotes
    const length = value.length;

    const option: Partial<TInteractionOption> = {
      correct: true, // This can be set based on some criteria or input
      endIndex,
      length,
      startIndex,
      startLine,
      startPos,
      value,
    };

    options.push(option);
  });

  return options;
}

const generateNewChoiceContent = (): TInputContentMultipleChoice => ({
  id: uuidv4(),
  content: "",
  correct: false,
});

type Props = {
  defaultValue?: TInteractionModule;
};

const mapDefaultValueToChoiceContent = (
  input: TInteractionModule
): TInputContentMultipleChoice[] => {
  if (input?.type === InteractionModuleType.MULTIPLE_CHOICE) {
    return input.items.map((item) => ({
      id: item.id,
      content: item.text,
      correct: item.correct,
    }));
  }
};

const InteractModule = ({ defaultValue }: Props) => {
  const [type, setType] = useState<InteractionModuleType>(
    defaultValue?.type ?? InteractionModuleType.MULTIPLE_CHOICE
  );
  const [codeLanguage, setCodeLanguage] = useState<SupportedCodeLanguage>(
    defaultValue?.type === InteractionModuleType.MULTIPLE_CHOICE
      ? SupportedCodeLanguage.PYTHON
      : defaultValue?.files[0].codeLanguage
  );
  const [multipleChoiceContentList, setMultipleChoiceContentList] = useState<
    TInputContentMultipleChoice[]
  >(
    mapDefaultValueToChoiceContent(defaultValue) ?? [generateNewChoiceContent()]
  );

  const [codeContent, setCodeContent] = useState<string>(
    defaultValue?.type !== InteractionModuleType.MULTIPLE_CHOICE
      ? defaultValue?.files[0].content
      : ""
  );
  const [fileName, setFileName] = useState<string>(
    defaultValue?.type !== InteractionModuleType.MULTIPLE_CHOICE
      ? defaultValue?.files[0].name
      : ""
  );

  const handleCreateInteractionModule = async ({ id }: { id: string }) => {
    if (!multipleChoiceContentList.filter((item) => item.content.length).length)
      return;
    const res = await InteractModuleAPI.createInteractionModule({
      isCode: false,
      type,
      lessonId: id,
    });

    switch (type) {
      case InteractionModuleType.MULTIPLE_CHOICE:
        multipleChoiceContentList.map(
          async (item) =>
            await ItemsAPI.createItem({
              interactionModuleId: res.id,
              correct: item.correct,
              text: item.content,
            })
        );

        break;
      case InteractionModuleType.CODE_FILL_THE_GAP:
        const options = extractInteractionOptions(codeContent);

        options.map((item) =>
          InteractionOptionAPI.createInteractionOption({
            ...item,
            interactionModuleId: res.id,
          })
        );

        await FileAPI.createFile({
          interactionModuleId: res.id,
          codeLanguage: codeLanguage,
          content: codeContent.replaceAll(`"""`, ""),
          name: fileName,
        });

        break;
      default:
    }
  };

  useEffect(() => {
    addUniqueListener(EMIT_EVENT.CREATE_LESSON, handleCreateInteractionModule);
    return () => {
      removeUniqueListener(
        EMIT_EVENT.CREATE_LESSON,
        handleCreateInteractionModule
      );
    };
  });

  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <p className="text-[0.9rem] leading-7">Type</p>
        <Select
          className={styles.select}
          value={type}
          onChange={(value) => {
            setType(value);
          }}
        >
          {Object.entries(InteractionModuleType).map(([key, item]) => (
            <Select.Option key={item}>
              <Space>{item}</Space>
            </Select.Option>
          ))}
        </Select>
      </div>
      {type === InteractionModuleType.MULTIPLE_CHOICE ? (
        <>
          {multipleChoiceContentList.map((item, index) => (
            <div key={item.id}>
              <Divider orientation="left" plain>
                {index + 1}
              </Divider>
              <InputContentMultipleChoice
                defaultVale={item}
                onChange={(value) => {
                  const newList = multipleChoiceContentList.map((choice) =>
                    choice.id === item.id ? value : choice
                  );
                  setMultipleChoiceContentList(newList);
                }}
              />
            </div>
          ))}
          <div className="flex justify-center">
            <Button
              icon={<AddCircleOutlineRoundedIcon></AddCircleOutlineRoundedIcon>}
              style={{ width: "25%" }}
              onClick={() =>
                setMultipleChoiceContentList((prev) => [
                  ...prev,
                  generateNewChoiceContent(),
                ])
              }
            ></Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-[0.9rem] leading-7">Code Language</p>
            <Select
              className={styles.select}
              value={codeLanguage}
              onChange={(value) => {
                setCodeLanguage(value);
              }}
            >
              {CodeLanguageOption.map((item) => (
                <Select.Option key={item.value}>
                  <Space>
                    {item.icon}
                    <div>{item.label}</div>
                  </Space>
                </Select.Option>
              ))}
            </Select>
          </div>
          <div>
            <p className="text-[0.9rem] leading-7">File name</p>
            <Input
              value={fileName}
              onChange={(e) => setFileName(e.currentTarget.value)}
            />
          </div>
          <div>
            <Space>
              <p className="text-[0.9rem] leading-7">Content</p>
              <Tooltip
                title={
                  'Write with markdown format and place the code input in to """'
                }
                trigger={["hover"]}
              >
                <InfoOutlinedIcon fontSize="small"></InfoOutlinedIcon>
              </Tooltip>
            </Space>
            <Textarea
              title="Content"
              rows={3}
              value={codeContent}
              onChange={(e) => setCodeContent(e.currentTarget.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractModule;
