import Input from "@/components/styledComponents/Input";
import Textarea from "@/components/styledComponents/TextArea";
import { TCourse } from "@/utils/types";
import { Modal } from "antd";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: TCourse;
};

const CreateCoursesModal = ({ isOpen, onClose, defaultCourse }: Props) => {
  const [name, setName] = useState<string>(defaultCourse?.name || "");
  const [description, setDescription] = useState<string>(
    defaultCourse?.description || ""
  );

  return (
    <Modal
      open={isOpen}
      title={"Create Course"}
      onCancel={onClose}
      okText={"Create"}
      okButtonProps={{ style: { backgroundColor: "#885bde" } }}
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

export default CreateCoursesModal;
