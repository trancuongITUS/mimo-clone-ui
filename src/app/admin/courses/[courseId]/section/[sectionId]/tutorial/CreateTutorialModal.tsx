import Input from "@/components/styledComponents/Input";
import Image from "next/image";
import Textarea from "@/components/styledComponents/TextArea";
import { Modal, Select, Space } from "antd";
import styles from "./CreateTutorialModal.module.css";
import { TutorialType, SupportedCodeLanguage, TTutorial } from "@/utils/types";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  defaultSection?: TTutorial;
  onOk: (payload: {
    title: string;
    descriptionContent: string;
    type: TutorialType;
    codeLanguage: SupportedCodeLanguage;
  }) => Promise<void>;
};

type TCodeLanguageOption = {
  label: string;
  value: string;
  icon: any;
};

export const CodeLanguageOption: TCodeLanguageOption[] = [
  {
    value: "javascript",
    label: "Javascript",
    icon: (
      <Image
        src={"/code-language-logo/logo-javascript.svg"}
        alt="logo-js"
        width={15}
        height={15}
      />
    ),
  },
  {
    value: "python",
    label: "Python",
    icon: (
      <Image
        src={
          "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
        }
        alt="logo-python"
        width={15}
        height={15}
      />
    ),
  },
  {
    value: "html",
    label: "HTML",
    icon: (
      <Image
        src={"/code-language-logo/logo-html.svg"}
        alt="logo-html"
        width={15}
        height={15}
      />
    ),
  },
];

const SectionsType: { value: string; label: string }[] = [
  {
    value: "course",
    label: "Course",
  },
  {
    value: "practiceOptional",
    label: "Practice Optional",
  },
  {
    value: "practiceRequired",
    label: "Practice Required",
  },
];

const CreateSectionModal = ({
  isOpen,
  onClose,
  defaultSection,
  onOk,
}: Props) => {
  const [name, setName] = useState<string>(defaultSection?.title || "");
  const [description, setDescription] = useState<string>(
    defaultSection?.descriptionContent || ""
  );
  const [codeLanguage, setCodeLanguage] = useState<SupportedCodeLanguage>(
    defaultSection?.codeLanguage || SupportedCodeLanguage.PYTHON
  );
  const [sectionType, setSectionType] = useState<TutorialType>(
    defaultSection?.type || TutorialType.COURSE
  );

  return (
    <Modal
      open={isOpen}
      title={"Create New Tutorial"}
      onCancel={onClose}
      okText={"Create"}
      okButtonProps={{ style: { backgroundColor: "#885bde" } }}
      onOk={() =>
        onOk({
          title: name,
          descriptionContent: description,
          type: sectionType,
          codeLanguage: codeLanguage,
        })
      }
    >
      <div className="flex flex-1 flex-col gap-1 mt-6">
        <div>
          <Input
            label="Tutorial Name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div>
          <Textarea
            label="Description"
            className="!min-h-20"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
        </div>
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
          <p className="text-[0.9rem] leading-7">Tutorial Type</p>
          <Select
            className={styles.select}
            options={SectionsType}
            value={sectionType}
            onChange={(value) => {
              setSectionType(value);
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
      </div>
    </Modal>
  );
};

export default CreateSectionModal;
