"use client";

import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Breadcrumb, Tag } from "antd";
import CreateChapterModal from "./CreateChapterModal";

const Lessons = () => {
  const { courseId, sectionId, tutorialId } = useParams<{
    courseId: string;
    sectionId: string;
    tutorialId: string;
  }>();
  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);

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
                    title: <Tag color="red">{sectionId}</Tag>,
                  },
                  {
                    title: <Tag color="green">{tutorialId}</Tag>,
                  },
                ]}
              />
            </h1>
            <div className="w-max">
              <Button
                className={"!text-base !px-3 !py-3"}
                onClick={() => {
                  setOpenCreateCourseModal(true);
                }}
              >
                Add Chapter
              </Button>
            </div>
          </div>
        </div>
      </Layout>
      {openCreateCourseModal && (
        <CreateChapterModal
          isOpen={openCreateCourseModal}
          onClose={() => setOpenCreateCourseModal(false)}
        />
      )}
    </>
  );
};

export default Lessons;
