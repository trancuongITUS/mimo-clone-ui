"use client";

import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  Collapse,
  Space,
  Tag,
  Tooltip,
  Button as AntdButton,
} from "antd";
import CreateChapterModal from "./CreateChapterModal";
import { TChapter } from "@/utils/types";
import { ChapterAPI } from "@/api/chapters";
import Link from "next/link";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import toast from "react-hot-toast";

const Lessons = () => {
  const { courseId, sectionId, tutorialId } = useParams<{
    courseId: string;
    sectionId: string;
    tutorialId: string;
  }>();
  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);
  const [chapters, setChapters] = useState<TChapter[]>([]);
  const [openingChapter, setOpeningChapter] = useState<TChapter>(null);

  const fetchChapters = async () => {
    const res = await ChapterAPI.getChaptersByTutorialId(tutorialId);
    setChapters(res);
  };

  useEffect(() => {
    fetchChapters();
  }, []);

  const handleCreateSection = async ({ title }) => {
    try {
      if (openingChapter) {
        await ChapterAPI.updateChapter(openingChapter.id, {
          ...openingChapter,
          title,
          lessons: [],
          tutorialId,
        });
        toast.success("Update section success");
      } else {
        await ChapterAPI.createChapter({
          title,
          index: chapters.length,
          lessons: [],
          tutorialId,
        });
        toast.success("Create section success");
      }

      setTimeout(async () => {
        await fetchChapters();
      }, 300);
    } catch (err) {
      toast.error("Create section fail ! ");
    } finally {
      setOpenCreateCourseModal(false);
    }
  };

  return (
    <>
      <Layout>
        <div className="p-6 w-full">
          <div className="flex items-center mb-8 w-full  justify-end">
            <h1 className="font-semibold text-lg md:text-2xl w-full"></h1>
            <div className="w-max">
              <Button
                className={"!text-base !px-3 !py-3 !w-max"}
                onClick={() => {
                  setOpenCreateCourseModal(true);
                }}
              >
                Add Chapter
              </Button>
            </div>
          </div>
        </div>

        <Space
          direction="vertical"
          style={{ width: "100%", paddingInline: 24 }}
        >
          {chapters.map((item) => (
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
                      <p className="font-mimopro font-medium text-base text-product2-content-secondary">
                        {item.title}
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
                          onClick={() => {
                            setOpeningChapter(item);
                            setOpenCreateCourseModal(true);
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
      {openCreateCourseModal && (
        <CreateChapterModal
          isOpen={openCreateCourseModal}
          onClose={() => {
            setOpenCreateCourseModal(false);
            setOpeningChapter(null);
          }}
          onOk={handleCreateSection}
          defaultValue={openingChapter}
        />
      )}
    </>
  );
};

export default Lessons;
