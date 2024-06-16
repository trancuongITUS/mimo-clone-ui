"use client";

import { ChapterAPI } from "@/api/chapters";
import _ from "lodash";
import ProtectedAdminRouter from "@/components/ProtectedAdminRouter";
import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { LessonType, TLesson } from "@/utils/types";
import { Collapse, Space, Tooltip, Button as AntdButton } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CreateLessonModal from "./CreateLessonModal";
import { LessonAPI } from "@/api/lesson";
import eventEmitter, { EMIT_EVENT } from "@/utils/eventEmitter";

const Lesson = () => {
  const { courseId, sectionId, tutorialId, chapterId } = useParams<{
    courseId: string;
    sectionId: string;
    tutorialId: string;
    chapterId: string;
  }>();

  const [lessons, setLessons] = useState<TLesson[]>([]);

  const [openCreateEditModal, setOpenCreateEditModal] =
    useState<boolean>(false);
  const [editingLesson, setEditingLesson] = useState<TLesson>(null);

  const fetchLesson = async (chapterId) => {
    const res = await ChapterAPI.getChaptersById(chapterId);
    setLessons(res.lessons);
  };

  useEffect(() => {
    fetchLesson(chapterId);
  }, []);

  const handleCreateLesson = async () => {
    try {
      if (editingLesson) {
        await LessonAPI.deleteLesson(editingLesson.id);
      }
      const res = await LessonAPI.createLesson({
        chapterId,
        type: LessonType.INTERACTIVE,
        index: editingLesson ? editingLesson.index : lessons.length,
      });

      setLessons((prev) => [...prev, res]);
      setEditingLesson(null);
      setOpenCreateEditModal(false);
      eventEmitter.emit(EMIT_EVENT.CREATE_LESSON, { id: res.id });

      setTimeout(async () => {
        await fetchLesson(chapterId);
      }, 800);
    } catch (err) {
      console.log("🚀 ~ handleCreateLesson ~ err:", err);
    }
  };

  return (
    <ProtectedAdminRouter>
      <Layout>
        <div className="p-6 w-full">
          <div className="flex items-center mb-8 w-full  justify-end">
            <h1 className="font-semibold text-lg md:text-2xl w-full"></h1>
            <div className="w-max">
              <Button
                className={"!text-base !px-3 !py-3 !w-max"}
                onClick={() => setOpenCreateEditModal(true)}
              >
                Add Lesson
              </Button>
            </div>
          </div>
        </div>
        <Space
          direction="vertical"
          style={{ width: "100%", paddingInline: 24 }}
        >
          {_.orderBy(lessons, (o) => o.index).map((item) => (
            <Collapse
              collapsible="header"
              expandIconPosition={"end"}
              key={item.id}
              style={{ alignItems: "center" }}
              items={[
                {
                  key: "1",
                  label: (
                    <div className="flex items-center">
                      <p className="font-mimopro font-normal text-xs min-w-[24px] self-start leading-6 text-product2-content-secondary ">
                        0{item.index + 1}
                      </p>
                    </div>
                  ),
                  children: (
                    <>
                      <p>
                        <strong>Type: </strong> {item.type}
                      </p>
                    </>
                  ),
                  extra: (
                    <Space>
                      <Tooltip title={"Edit lesson"}>
                        <AntdButton
                          type="text"
                          icon={<SettingsOutlinedIcon fontSize="small" />}
                          onClick={() => {
                            console.log("🚀 ~ Lesson ~ item:", item);

                            setEditingLesson(item);
                            setOpenCreateEditModal(true);
                          }}
                        ></AntdButton>
                      </Tooltip>
                    </Space>
                  ),
                },
              ]}
            />
          ))}
        </Space>
      </Layout>
      <CreateLessonModal
        isOpen={openCreateEditModal}
        onClose={() => {
          setOpenCreateEditModal(false);
          setEditingLesson(null);
        }}
        defaultValue={editingLesson}
        onOk={handleCreateLesson}
      />
    </ProtectedAdminRouter>
  );
};

export default Lesson;
