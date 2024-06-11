import Input from "@/components/styledComponents/Input";
import Textarea from "@/components/styledComponents/TextArea";
import { Modal } from "antd";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOk: (payload: { title: string }) => Promise<void>;
};

const CreateLessonModal = ({ isOpen, onClose, onOk }: Props) => {
  const [title, setTitle] = useState<string>("");
  return (
    <Modal
      open={isOpen}
      title={"Create chapter"}
      onCancel={onClose}
      okText={"Create"}
      okButtonProps={{ style: { backgroundColor: "#885bde" } }}
      onOk={() => onOk({ title })}
    >
      <div className="flex flex-1 flex-col gap-6 mt-6">
        <div>
          <Input
            label="Chapter title"
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
            value={title}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateLessonModal;
