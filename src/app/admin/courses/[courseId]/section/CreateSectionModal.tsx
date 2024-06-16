import Input from "@/components/styledComponents/Input";
import Textarea from "@/components/styledComponents/TextArea";
import { TSection } from "@/utils/types";
import { Modal } from "antd";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: TSection;
  onOk: (payload: { name: string; description: string }) => Promise<void>;
};

const CreateCoursesModal = ({
  isOpen,
  onClose,
  defaultCourse,
  onOk,
}: Props) => {
  const [name, setName] = useState<string>(defaultCourse?.name || "");
  const [description, setDescription] = useState<string>(
    defaultCourse?.description || ""
  );

  return (
    <Modal
      open={isOpen}
      title={defaultCourse ? "Update Section" : "Create New Section"}
      onCancel={onClose}
      okText={defaultCourse ? "Save" : "Create"}
      okButtonProps={{ style: { backgroundColor: "#885bde" } }}
      onOk={() => onOk({ name, description })}
    >
      <div className="flex flex-1 flex-col gap-6 mt-6">
        <div>
          <Input
            label="Section name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div>
          <Textarea
            label="Description"
            className="!h-20"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateCoursesModal;
