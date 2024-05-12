"use client";

import { Layout } from "@/components/admin/layout";
import Button from "@/components/styledComponents/Button";
import { useState } from "react";
import CreateCoursesPathModal from "./CreateCoursePathModal";

const CreateCourses = () => {
  const [openCreateCourseModal, setOpenCreateCourseModal] =
    useState<boolean>(false);
  return (
    <>
      <Layout>
        <div className={"w-max ml-auto mr-6 mt-6"}>
          <Button
            className={"!text-base !px-3 !py-3"}
            onClick={() => {
              setOpenCreateCourseModal(true);
            }}
          >
            Add Course Path
          </Button>
        </div>
      </Layout>
      {openCreateCourseModal && (
        <CreateCoursesPathModal
          isOpen={openCreateCourseModal}
          onClose={() => setOpenCreateCourseModal(false)}
        />
      )}
    </>
  );
};

export default CreateCourses;
