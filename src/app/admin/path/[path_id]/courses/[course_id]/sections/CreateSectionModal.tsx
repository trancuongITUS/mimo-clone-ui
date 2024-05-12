import Input from "@/components/styledComponents/Input";
import Image from "next/image";
import Textarea from "@/components/styledComponents/TextArea";
import { Modal, Select, Space } from "antd";
import styles from "./CreateSelectionModal.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type TCodeLanguageOption = {
  label: string;
  value: string;
  icon: any;
};

const CodeLanguageOption: TCodeLanguageOption[] = [
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

const CreateSectionModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      open={isOpen}
      title={"Create Section"}
      onCancel={onClose}
      okText={"Create"}
      okButtonProps={{ style: { backgroundColor: "#885bde" } }}
    >
      <div className="flex flex-1 flex-col gap-1 mt-6">
        <div>
          <Input label="Section Name" />
        </div>
        <div>
          <Textarea label="Description" className="!min-h-20" />
        </div>
        <div>
          <p className="text-[0.9rem] leading-7">Code Language</p>
          <Select className={styles.select}>
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
          <p className="text-[0.9rem] leading-7">Section Type</p>
          <Select className={styles.select} options={SectionsType}>
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
