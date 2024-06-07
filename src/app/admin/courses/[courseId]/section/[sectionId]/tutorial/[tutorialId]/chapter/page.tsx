"use client";

import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Breadcrumb, Tag } from "antd";
import CreateChapterModal from "./CreateChapterModal";

const Lessons = () => {
  const params = useParams<{
    path_id: string;
    course_id: string;
    section_id: string;
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
                    title: <Tag color="red">{params?.path_id}</Tag>,
                  },
                  {
                    title: <Tag color="red">{params?.course_id}</Tag>,
                  },
                  {
                    title: <Tag color="green">{params?.section_id}</Tag>,
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
                Add Section
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
