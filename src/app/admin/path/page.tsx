"use client";

import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { useState } from "react";
import CreateCoursesPathModal from "./CreateCoursePathModal";
import { Checkbox, Collapse, Space, Button as AntdButton, Tooltip } from "antd";
import { TCoursePath } from "@/utils/types";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import Link from "next/link";

const fakeData: TCoursePath[] = [
  {
    id: "6602fd05a8fc89e974fa3f2a",
    name: "Python",
    description: "Learn the essentials of the fun, all-purpose language Python",
    isPublished: true,
    iconUrl: "",
  },
  {
    id: "6602fd62666d4ea088040bd2",
    name: "Javascript",
    description: "",
    isPublished: false,
    iconUrl: "",
  },
];

const CreateCourses = () => {
  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);
  const [openingCoursePath, setOpeningCoursePath] = useState<TCoursePath>(null);
  return (
    <>
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
              Add Course Path
            </Button>
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
                          <Link href={`./path/${item.id}/courses`}>
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
        />
      )}
    </>
  );
};

export default CreateCourses;
