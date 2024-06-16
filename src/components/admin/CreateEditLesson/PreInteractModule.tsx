"use client";

import Textarea from "@/components/styledComponents/TextArea";
import styles from "./index.module.css";
import { Button, Select, Space } from "antd";
import { useEffect, useState } from "react";
import {
  PrePostInteractionModuleContentType,
  PrePostInteractionModuleType,
  PrePostInteractionModuleVisibleIf,
  SupportedCodeLanguage,
} from "@/utils/types";
import { CodeLanguageOption } from "@/app/admin/courses/[courseId]/section/[sectionId]/tutorial/CreateTutorialModal";
import Input from "@/components/styledComponents/Input";
import { PrePostInteractionModuleAPI } from "@/api/prePostInteractionModule";
import { EMIT_EVENT } from "@/utils/eventEmitter";
import { FileAPI } from "@/api/files";
import {
  addUniqueListener,
  removeUniqueListener,
} from "@/utils/eventEmitterIUtils";
import { PreInteractionModuleInput } from "./PreInteractModuleList";

type Props = {
  defaultModule: PreInteractionModuleInput;
};

const PreInteractionModule = ({ defaultModule }: Props) => {
  const [contentType, setContentType] =
    useState<PrePostInteractionModuleContentType>(defaultModule.contentType);
  const [codeLanguage, setCodeLanguage] = useState<SupportedCodeLanguage>(
    defaultModule.codeLanguage
  );
  const [paragraphContent, setParagraphContent] = useState<string>(
    defaultModule.paragraphContent
  );
  const [codeFileName, setCodeFileName] = useState<string>(
    defaultModule.codeFileName
  );
  const [codeContent, setCodeContent] = useState<string>(
    defaultModule.codeContent
  );

  const handleCreatePreInteractionModule = async ({ id }: { id: string }) => {
    switch (contentType) {
      case PrePostInteractionModuleContentType.PARAGRAPH:
        await PrePostInteractionModuleAPI.createPrePostInteractionModules({
          content: paragraphContent,
          output: "",
          visibleIf: PrePostInteractionModuleVisibleIf.ALWAYS,
          type: PrePostInteractionModuleType.PRE,
          lessonId: id,
          contentType,
        });
        break;
      case PrePostInteractionModuleContentType.CODE_NONE:
        const res =
          await PrePostInteractionModuleAPI.createPrePostInteractionModules({
            content: "",
            output: "",
            visibleIf: PrePostInteractionModuleVisibleIf.ALWAYS,
            type: PrePostInteractionModuleType.PRE,
            lessonId: id,
            contentType,
          });
        await FileAPI.createFile({
          preInteractionModuleId: res.id,
          codeLanguage: codeLanguage,
          content: codeContent,
          name: codeFileName,
        });
        break;
      default:
    }
  };

  useEffect(() => {
    addUniqueListener(
      EMIT_EVENT.CREATE_LESSON,
      handleCreatePreInteractionModule
    );
    return () => {
      removeUniqueListener(
        EMIT_EVENT.CREATE_LESSON,
        handleCreatePreInteractionModule
      );
    };
  });

  return (
    <>
      <div className="w-full flex flex-col gap-4 p-2">
        <div>
          <p className="text-[0.9rem] leading-7">Type</p>
          <Select
            className={styles.select}
            value={contentType}
            onChange={(value) => {
              setContentType(value);
            }}
          >
            {Object.entries(PrePostInteractionModuleContentType).map(
              ([key, item]) => (
                <Select.Option key={item}>
                  <Space>{item}</Space>
                </Select.Option>
              )
            )}
          </Select>
        </div>
        {contentType === PrePostInteractionModuleContentType.PARAGRAPH ? (
          <div>
            <p className="text-[0.9rem] leading-7">Content</p>
            <Textarea
              title="Content"
              rows={3}
              value={paragraphContent}
              onChange={(e) => {
                setParagraphContent(e.currentTarget.value);
              }}
            />
          </div>
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
                value={codeFileName}
                onChange={(e) => setCodeFileName(e.currentTarget.value)}
              />
            </div>
            <div>
              <p className="text-[0.9rem] leading-7">Content</p>
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
    </>
  );
};

export default PreInteractionModule;
