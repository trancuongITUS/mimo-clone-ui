import styles from "./index.module.css";

import { Select, Space } from "antd";
import { useEffect, useState } from "react";
import {
  PrePostInteractionModuleContentType,
  PrePostInteractionModuleType,
  PrePostInteractionModuleVisibleIf,
  TPrePostInteractionModule,
} from "@/utils/types";
import Input from "@/components/styledComponents/Input";
import Textarea from "@/components/styledComponents/TextArea";
import {
  addUniqueListener,
  removeUniqueListener,
} from "@/utils/eventEmitterIUtils";
import { EMIT_EVENT } from "@/utils/eventEmitter";
import { PrePostInteractionModuleAPI } from "@/api/prePostInteractionModule";

type Props = {
  defaultPostInteract: TPrePostInteractionModule[];
};

const PostInteractModule = ({ defaultPostInteract }: Props) => {
  const [type, setType] = useState<PrePostInteractionModuleVisibleIf>(
    defaultPostInteract?.[0]?.visibleIf ??
      PrePostInteractionModuleVisibleIf.ALWAYS
  );
  const [paragraphContent, setParagraphContent] = useState<string>(
    defaultPostInteract?.[0]?.content ?? ""
  );

  const handleCreatePostInteractionModule = async ({ id }: { id: string }) => {
    await PrePostInteractionModuleAPI.createPrePostInteractionModules({
      lessonId: id,
      type: PrePostInteractionModuleType.POST,
      contentType: PrePostInteractionModuleContentType.PARAGRAPH,
      visibleIf: type,
      content: paragraphContent,
    });
  };

  useEffect(() => {
    addUniqueListener(
      EMIT_EVENT.CREATE_LESSON,
      handleCreatePostInteractionModule
    );
    return () => {
      removeUniqueListener(
        EMIT_EVENT.CREATE_LESSON,
        handleCreatePostInteractionModule
      );
    };
  });
  return (
    <div>
      <p className="text-[0.9rem] leading-7">Show condition</p>
      <Select
        className={styles.select}
        value={type}
        onChange={(value) => {
          setType(value);
        }}
      >
        {Object.entries(PrePostInteractionModuleVisibleIf).map(
          ([key, item]) => (
            <Select.Option key={item}>
              <Space>{item}</Space>
            </Select.Option>
          )
        )}
      </Select>
      <div className="flex flex-col gap-1">
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
      </div>
    </div>
  );
};

export default PostInteractModule;
