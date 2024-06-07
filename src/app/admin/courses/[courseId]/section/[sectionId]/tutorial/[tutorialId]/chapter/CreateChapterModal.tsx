import Input from "@/components/styledComponents/Input";
import Textarea from "@/components/styledComponents/TextArea";
import { Modal } from "antd";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateLessonModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      open={isOpen}
      title={"Create Lesson"}
      onCancel={onClose}
      okText={"Create"}
      okButtonProps={{ style: { backgroundColor: "#885bde" } }}
    >
      <div className="flex flex-1 flex-col gap-6 mt-6">
        <div>
          <Input label="Lesson name" />
        </div>
        <div>
          <Textarea label="Description" className="!h-20" />
        </div>
      </div>
    </Modal>
  );
};

export default CreateLessonModal;
