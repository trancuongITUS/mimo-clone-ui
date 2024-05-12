"use client";

import { Layout } from "@/components/admin/layout";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Button from "@/components/styledComponents/Button";
import CreateCoursesModal from "./CreateCourseModal";

const CreateCourse = () => {
  const params = useParams<{ path_id: string }>();
  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);

  return (
    <>
      <Layout>
        <div className="p-6">
          <div className="flex items-center mb-8  justify-between">
            <h1 className="font-semibold text-lg md:text-2xl">
              {params?.path_id} courses
            </h1>
            <div className="w-max">
              <Button
                className={"!text-base !px-3 !py-3"}
                onClick={() => {
                  setOpenCreateCourseModal(true);
                }}
              >
                Add Course
              </Button>
            </div>
          </div>
        </div>
      </Layout>
      {openCreateCourseModal && (
        <CreateCoursesModal
          isOpen={openCreateCourseModal}
          onClose={() => setOpenCreateCourseModal(false)}
        />
      )}
    </>
  );
};

export default CreateCourse;
