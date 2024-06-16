"use client";

import { Layout } from "@/components/admin/layout";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Button from "@/components/styledComponents/Button";
import CreateCoursesModal from "./CreateSectionModal";
import { TSection } from "@/utils/types";
import { Space, Tooltip, Button as AntdButton, Collapse, Checkbox } from "antd";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";
import { SectionAPI } from "@/api/section";
import toast from "react-hot-toast";

const CreateCourse = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const [sections, setSections] = useState<TSection[]>([]);

  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);
  const [openingCourse, setOpeningCourse] = useState<TSection>(null);

  const fetchSectionByCourseId = async (courseId: string) => {
    const res = await SectionAPI.getSectionsByCourseID(courseId);
    setSections(res);
  };

  useEffect(() => {
    if (courseId) fetchSectionByCourseId(courseId);
  }, [courseId]);

  const handleCreateSection = async ({ name, description }) => {
    try {
      if (openingCourse) {
        await SectionAPI.updateSection(openingCourse.id, {
          name,
          description,
          isLocked: true,
          index: sections.length,
          courseId,
        });
        toast.success("Update section success");
      } else {
        await SectionAPI.createSection({
          name,
          description,
          isLocked: true,
          index: sections.length,
          courseId,
        });
        toast.success("Create section success");
      }

      setTimeout(async () => {
        await fetchSectionByCourseId(courseId);
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
        <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
          <div className="p-6">
            <div className="flex items-center mb-8  justify-between">
              <h1 className="font-semibold text-lg md:text-2xl">
                {/* {params?.courseId} courses */}
              </h1>
              <div className="w-max">
                <Button
                  className={"!text-base !px-3 !py-3"}
                  onClick={() => {
                    setOpeningCourse(null);
                    setOpenCreateCourseModal(true);
                  }}
                >
                  Add Section
                </Button>
              </div>
            </div>
          </div>
          <Space
            direction="vertical"
            style={{ width: "100%", paddingInline: 24 }}
          >
            {sections.map((item) => (
              <Collapse
                collapsible="header"
                expandIconPosition={"end"}
                key={item.id}
                style={{ alignItems: "center" }}
                items={[
                  {
                    key: "1",
                    label: item.name,
                    children: (
                      <p>
                        <strong>Description: </strong>
                        {item.description}
                      </p>
                    ),
                    extra: (
                      <Space>
                        <Tooltip title={"View section"}>
                          <Link href={`./section/${item.id}/tutorial`}>
                            <AntdButton
                              type="text"
                              icon={
                                <DriveFileMoveOutlinedIcon fontSize="small" />
                              }
                            ></AntdButton>
                          </Link>
                        </Tooltip>
                        <Checkbox checked={item.isLocked}>Blocked</Checkbox>
                        <Tooltip title={"Edit course path"}>
                          <AntdButton
                            type="text"
                            icon={<SettingsOutlinedIcon fontSize="small" />}
                            onClick={() => {
                              setOpeningCourse(item);
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
        </Space>
      </Layout>
      {openCreateCourseModal && (
        <CreateCoursesModal
          isOpen={openCreateCourseModal}
          onClose={() => setOpenCreateCourseModal(false)}
          defaultCourse={openingCourse}
          onOk={handleCreateSection}
        />
      )}
    </>
  );
};

export default CreateCourse;
