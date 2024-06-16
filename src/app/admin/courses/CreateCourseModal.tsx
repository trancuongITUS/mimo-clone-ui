import Input from "@/components/styledComponents/Input";
import Textarea from "@/components/styledComponents/TextArea";
import { TCourse } from "@/utils/types";
import { Modal } from "antd";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  defaultPath?: TCourse;
  onOk: (payload: { name: string; description: string }) => Promise<void>;
};

const CreateCoursesPathModal = ({
  isOpen,
  onClose,
  defaultPath,
  onOk,
}: Props) => {
  const [name, setName] = useState<string>(defaultPath?.name || "");
  const [description, setDescription] = useState<string>(
    defaultPath?.description || ""
  );

  return (
    <Modal
      open={isOpen}
      title={defaultPath ? "Update Course" : "Create Courses"}
      onCancel={onClose}
      okText={defaultPath ? "Save" : "Create"}
      okButtonProps={{ style: { backgroundColor: "#885bde" } }}
      onOk={() => onOk({ name, description })}
    >
      <div className="flex flex-1 flex-col gap-6 mt-6">
        <div>
          <Input
            label="Course name"
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

export default CreateCoursesPathModal;
