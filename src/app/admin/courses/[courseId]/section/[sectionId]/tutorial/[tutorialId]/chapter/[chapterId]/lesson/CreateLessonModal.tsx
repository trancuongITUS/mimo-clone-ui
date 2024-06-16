import InteractModule from "@/components/admin/CreateEditLesson/InteractModule";
import PostInteractModule from "@/components/admin/CreateEditLesson/PostInteractModule";
import PreInteractModuleList from "@/components/admin/CreateEditLesson/PreInteractModuleList";
import { PrePostInteractionModuleType, TLesson } from "@/utils/types";
import { Modal } from "antd";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOk: () => Promise<void>;
  defaultValue?: TLesson;
};

const CreateLessonModal = ({ isOpen, onClose, onOk, defaultValue }: Props) => {
  return (
    <Modal
      open={isOpen}
      title={defaultValue ? "Update lesson" : "Create New Lesson"}
      onCancel={onClose}
      okText={defaultValue ? "Save" : "Create"}
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
        <PreInteractModuleList
          defaultPreInteractModule={defaultValue?.prePostInteractionModules.filter(
            (item) => item.type === PrePostInteractionModuleType.PRE
          )}
        />
        <div className="w-full border-b border-product2-border-secondary text-lg">
          Interact Module
        </div>
        <InteractModule defaultValue={defaultValue?.interactionModules[0]} />
        <div className="w-full border-b border-product2-border-secondary text-lg">
          Post Interact Module
        </div>
        <PostInteractModule
          defaultPostInteract={defaultValue?.prePostInteractionModules.filter(
            (item) => item.type === PrePostInteractionModuleType.POST
          )}
        />
      </div>
    </Modal>
  );
};

export default CreateLessonModal;
