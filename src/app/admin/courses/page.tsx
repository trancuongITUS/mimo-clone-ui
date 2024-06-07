"use client";

import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { useEffect, useState } from "react";
import CreateCoursesPathModal from "./CreateCourseModal";
import { Checkbox, Collapse, Space, Button as AntdButton, Tooltip } from "antd";
import { TCourse } from "@/utils/types";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import Link from "next/link";
import { CoursesAPI } from "@/api/courses";
import toast from "react-hot-toast";
import ProtectedAdminRouter from "@/components/ProtectedAdminRouter";

const CreateCourses = () => {
  const [allCourses, setAllCourses] = useState<TCourse[]>([]);
  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);
  const [openingCoursePath, setOpeningCoursePath] = useState<TCourse>(null);

  useEffect(() => {
    const fetchAllCoursesPath = async () => {
      const res = await CoursesAPI.getAllCourses();
      setAllCourses(res);
    };
    fetchAllCoursesPath();
  }, []);

  const handleCreateCourse = async ({ name, description }) => {
    try {
      const data = await CoursesAPI.createCourse({
        name,
        description,
        isPublished: false,
        iconUrl: "",
      });
      setAllCourses((prev) => [...prev, data]);
      toast.success("Create course success");
    } catch (err) {
      toast.error("Create course fail ! ");
    } finally {
      setOpenCreateCourseModal(false);
    }
  };

  return (
    <>
      <ProtectedAdminRouter>
        <Layout>
          <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
            <div className={"w-max ml-auto mr-6 mt-6"}>
              <Button
                className={"!text-base !px-3 !py-3"}
                onClick={() => {
                  setOpeningCoursePath(null);
                  setOpenCreateCourseModal(true);
                }}
              >
                Add Course
              </Button>
            </div>
            <Space
              direction="vertical"
              style={{ width: "100%", paddingInline: 24 }}
            >
              {allCourses.map((item) => (
                <Collapse
                  collapsible="header"
                  expandIconPosition={"end"}
                  key={item.id}
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
                          <Tooltip title={"View courses"}>
                            <Link href={`./courses/${item.id}/section`}>
                              <AntdButton
                                type="text"
                                icon={<DriveFileMoveOutlinedIcon />}
                              ></AntdButton>
                            </Link>
                          </Tooltip>
                          <Checkbox checked={item.isPublished}>
                            Published
                          </Checkbox>
                          <Tooltip title={"Edit course path"}>
                            <AntdButton
                              type="text"
                              icon={<SettingsOutlinedIcon />}
                              onClick={() => {
                                setOpeningCoursePath(item);
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
          <CreateCoursesPathModal
            isOpen={openCreateCourseModal}
            onClose={() => setOpenCreateCourseModal(false)}
            defaultPath={openingCoursePath}
            onOk={handleCreateCourse}
          />
        )}
      </ProtectedAdminRouter>
    </>
  );
};

export default CreateCourses;
