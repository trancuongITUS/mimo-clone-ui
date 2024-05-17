"use client";

import { Layout } from "@/components/admin/layout";
import { useState } from "react";
import { useParams } from "next/navigation";
import Button from "@/components/styledComponents/Button";
import CreateCoursesModal from "./CreateCourseModal";
import { TCourse } from "@/utils/types";
import { Space, Tooltip, Button as AntdButton, Collapse, Checkbox } from "antd";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";

const fakeData: TCourse[] = [
  {
    id: "6602fd05a8fc89e974fa3f2b",
    courseId: "6602fd05a8fc89e974fa3f2a",
    name: "Python Basics",
    description: "Create variables storing numbers, strings, and booleans",
    index: 0,
    isBlocked: false,
  },
  {
    id: "6602fd06a8fc89e974fa4560",
    courseId: "6602fd05a8fc89e974fa3f2a",
    name: "Types & Comparisons",
    description: "Store the result of comparisons in variables",
    index: 1,
    isBlocked: false,
  },
];

const CreateCourse = () => {
  const params = useParams<{ path_id: string }>();
  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);
  const [openingCourse, setOpeningCourse] = useState<TCourse>(null);
  return (
    <>
      <Layout>
        <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
          <div className="p-6">
            <div className="flex items-center mb-8  justify-between">
              <h1 className="font-semibold text-lg md:text-2xl">
                {params?.path_id} courses
              </h1>
              <div className="w-max">
                <Button
                  className={"!text-base !px-3 !py-3"}
                  onClick={() => {
                    setOpeningCourse(null);
                    setOpenCreateCourseModal(true);
                  }}
                >
                  Add Course
                </Button>
              </div>
            </div>
          </div>
          <Space
            direction="vertical"
            style={{ width: "100%", paddingInline: 24 }}
          >
            {fakeData.map((item) => (
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
                        <Tooltip title={"View courses"}>
                          <Link href={`./courses/${item.id}/sections`}>
                            <AntdButton
                              type="text"
                              icon={
                                <DriveFileMoveOutlinedIcon fontSize="small" />
                              }
                            ></AntdButton>
                          </Link>
                        </Tooltip>
                        <Checkbox checked={item.isBlocked}>Blocked</Checkbox>
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
        />
      )}
    </>
  );
};

export default CreateCourse;
