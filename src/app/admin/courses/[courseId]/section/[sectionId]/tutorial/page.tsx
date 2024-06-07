"use client";

import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CreateTutorialModal, { CodeLanguageOption } from "./CreateTutorialModal";
import {
  Breadcrumb,
  Collapse,
  Button as AntdButton,
  Space,
  Tag,
  Tooltip,
} from "antd";
import {
  SupportedCodeLanguage,
  TSection,
  TTutorial,
  TutorialType,
} from "@/utils/types";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";
import { TutorialAPI } from "@/api/tutorials";
import toast from "react-hot-toast";

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
  const { sectionId, courseId } = useParams<{
    sectionId: string;
    courseId: string;
  }>();
  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);
  const [openingSection, setOpeningSection] = useState<TTutorial>(null);
  const [tutorials, setTutorials] = useState<TTutorial[]>([]);

  useEffect(() => {
    const fetchTutorials = async (sectionId) => {
      const data = await TutorialAPI.getTutorialsBySectionId(sectionId);
      setTutorials(data);
    };
    fetchTutorials(sectionId);
  }, [sectionId]);

  const handleCreateNewTutorial = async ({
    title,
    descriptionContent,
    type,
    codeLanguage,
  }) => {
    try {
      const data = await TutorialAPI.createTutorial({
        bannerIconUrl: "",
        codeLanguage,
        title,
        descriptionContent,
        type,
        sectionId,
        index: tutorials.length,
      });
      setTutorials((prev) => [...prev, data]);
      toast.success("Create tutorial success");
    } catch (err) {
      toast.error("Create tutorial fail ! ");
    } finally {
      setOpenCreateCourseModal(false);
    }
  };
  return (
    <>
      <Layout>
        <div className="p-6">
          <div className="flex items-center mb-8  justify-between">
            <h1 className="font-semibold text-lg md:text-2xl">
              <Breadcrumb
                items={[
                  {
                    title: <Tag color="red">{courseId}</Tag>,
                  },
                  {
                    title: <Tag color="green">{sectionId}</Tag>,
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
                Add Tutorial
              </Button>
            </div>
          </div>
        </div>
        <Space
          direction="vertical"
          style={{ width: "100%", paddingInline: 24 }}
        >
          {tutorials.map((item) => (
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
                        <Link href={`./tutorial/${item.id}/chapter`}>
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
        <CreateTutorialModal
          isOpen={openCreateCourseModal}
          onClose={() => setOpenCreateCourseModal(false)}
          defaultSection={openingSection}
          onOk={handleCreateNewTutorial}
        />
      )}
    </>
  );
};

export default Sections;
