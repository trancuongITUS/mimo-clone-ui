"use client";

import { ChapterAPI } from "@/api/chapters";
import _ from "lodash";
import ProtectedAdminRouter from "@/components/ProtectedAdminRouter";
import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { LessonType, TLesson } from "@/utils/types";
import { Collapse, Space, Tooltip, Button as AntdButton } from "antd";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
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

  useEffect(() => {
    const fetchLesson = async (chapterId) => {
      const res = await ChapterAPI.getChaptersById(chapterId);
      setLessons(res.lessons);
    };

    fetchLesson(chapterId);
  }, []);

  const handleCreateLesson = async () => {
    try {
      const res = await LessonAPI.createLesson({
        chapterId,
        type: LessonType.INTERACTIVE,
        index: lessons.length,
      });
      console.log("🚀 ~ handleCreateLesson ~ res:", res);

      setLessons((prev) => [...prev, res]);
      setOpenCreateEditModal(false);
      eventEmitter.emit(EMIT_EVENT.CREATE_LESSON, { id: res.id });
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
                      <Tooltip title={"View lesson"}>
                        <Link href={`./chapter/${item.id}/lesson`}>
                          <AntdButton
                            type="text"
                            icon={
                              <DriveFileMoveOutlinedIcon fontSize="small" />
                            }
                          ></AntdButton>
                        </Link>
                      </Tooltip>
                      <Tooltip title={"Edit course path"}>
                        <AntdButton
                          type="text"
                          icon={<SettingsOutlinedIcon fontSize="small" />}
                          onClick={() => {}}
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
        }}
        onOk={handleCreateLesson}
      />
    </ProtectedAdminRouter>
  );
};

export default Lesson;
