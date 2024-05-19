"use client";

import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { useParams } from "next/navigation";
import { useState } from "react";
import CreateSectionModal, { CodeLanguageOption } from "./CreateSectionModal";
import {
  Breadcrumb,
  Collapse,
  Button as AntdButton,
  Space,
  Tag,
  Tooltip,
} from "antd";
import { SectionType, SupportedCodeLanguage, TSection } from "@/utils/types";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";

const fakeData: TSection[] = [
  {
    id: "6602fd05a8fc89e974fa3f2c",
    sectionId: "6602fd05a8fc89e974fa3f2b",
    title: "Creating Variables",
    descriptionContent:
      "Create variables storing numbers, strings, and booleans",
    index: 0,
    type: SectionType.COURSE,
    codeLanguage: SupportedCodeLanguage.PYTHON,
    bannerIconUrl: "",
  },
  {
    id: "6602fd05a8fc89e974fa3f2c",
    sectionId: "6602fd05a8fc89e974fa3f2b",
    title: "Using Variables",
    descriptionContent: "Learn how to update and reuse variables.",
    index: 1,
    type: SectionType.COURSE,
    codeLanguage: SupportedCodeLanguage.PYTHON,
    bannerIconUrl: "",
  },
];

const FormatCodeLanguage = (value: SupportedCodeLanguage) => {
  const codeLanguageOption = CodeLanguageOption.find(
    (item) => item.value === value
  );

  return codeLanguageOption ? (
    <Space>
      {codeLanguageOption.icon}
      <div>{codeLanguageOption.label}</div>
    </Space>
  ) : (
    <></>
  );
};

const Sections = () => {
  const params = useParams<{ path_id: string; course_id: string }>();
  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);
  const [openingSection, setOpeningSection] = useState<TSection>(null);
  return (
    <>
      <Layout>
        <div className="p-6">
          <div className="flex items-center mb-8  justify-between">
            <h1 className="font-semibold text-lg md:text-2xl">
              <Breadcrumb
                items={[
                  {
                    title: <Tag color="red">{params?.path_id}</Tag>,
                  },
                  {
                    title: <Tag color="green">{params?.course_id}</Tag>,
                  },
                ]}
              />
            </h1>
            <div className="w-max">
              <Button
                className={"!text-base !px-3 !py-3"}
                onClick={() => {
                  setOpeningSection(null);
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
          {fakeData.map((item) => (
            <Collapse
              collapsible="header"
              expandIconPosition={"end"}
              key={item.id}
              style={{ alignItems: "center" }}
              items={[
                {
                  key: "1",
                  label: item.title,
                  children: (
                    <>
                      <p>
                        <strong>Description: </strong>
                        {item.descriptionContent}
                      </p>
                      <p>
                        <strong>Code language: </strong>{" "}
                        {FormatCodeLanguage(item.codeLanguage)}
                      </p>
                      <p>
                        <strong>Type: </strong> {item.type}
                      </p>
                    </>
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
                      <Tooltip title={"Edit course path"}>
                        <AntdButton
                          type="text"
                          icon={<SettingsOutlinedIcon fontSize="small" />}
                          onClick={() => {
                            setOpeningSection(item);
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
        <CreateSectionModal
          isOpen={openCreateCourseModal}
          onClose={() => setOpenCreateCourseModal(false)}
          defaultSection={openingSection}
        />
      )}
    </>
  );
};

export default Sections;
