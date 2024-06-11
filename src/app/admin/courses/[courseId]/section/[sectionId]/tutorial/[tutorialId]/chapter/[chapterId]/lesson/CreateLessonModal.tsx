import InteractModule from "@/components/admin/CreateEditLesson/InteractModule";
import PostInteractModule from "@/components/admin/CreateEditLesson/PostInteractModule";
import PreInteractModuleList from "@/components/admin/CreateEditLesson/PreInteractModuleList";
import { Modal } from "antd";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOk: () => Promise<void>;
};

const CreateLessonModal = ({ isOpen, onClose, onOk }: Props) => {
  return (
    <Modal
      open={isOpen}
      title={"Create New Lesson"}
      onCancel={onClose}
      okText={"Create"}
      okButtonProps={{ style: { backgroundColor: "#885bde" } }}
      onOk={onOk}
      styles={{
        body: {
          maxHeight: "60vh",
          overflowY: "auto",
        },
      }}
      width={"60vw"}
      destroyOnClose
    >
      <div className="flex flex-1 flex-col gap-6 mt-6">
        <div className="w-full border-b border-product2-border-secondary text-lg">
          Pre Interact Module
        </div>
        <PreInteractModuleList />
        <div className="w-full border-b border-product2-border-secondary text-lg">
          Interact Module
        </div>
        <InteractModule />
        <div className="w-full border-b border-product2-border-secondary text-lg">
          Post Interact Module
        </div>
        <PostInteractModule />
      </div>
    </Modal>
  );
};

export default CreateLessonModal;
