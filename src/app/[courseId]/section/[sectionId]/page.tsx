"use client";
import { SectionAPI } from "@/api/section";
import { TutorialAPI } from "@/api/tutorials";
import ProtectedRouter from "@/components/ProtectedRouter";
import Layout from "@/components/common/layout";
import { TSection, TTutorial } from "@/utils/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SectionPage() {
  const { courseId, sectionId } = useParams<{
    courseId: string;
    sectionId: string;
  }>();

  const [currentSection, setCurrentSection] = useState<TSection>(null);
  const [tutorials, setTutorials] = useState<TTutorial[]>([]);

  useEffect(() => {
    const fetchTutorials = async (sectionId) => {
      const data = await TutorialAPI.getTutorialsBySectionId(sectionId);
      setTutorials(data);
    };
    fetchTutorials(sectionId);
  }, []);

  useEffect(() => {
    const fetchCurrentSection = async (id) => {
      const data = await SectionAPI.getSectionById(id);
      setCurrentSection(data);
    };

    fetchCurrentSection(sectionId);
  }, []);

  return (
    <ProtectedRouter>
      <Layout>
        <div className="w-full">
          <div className="h-[50px] sticky left-0 right-0 top-0 w-full border-y border-product2-border-secondary flex">
            <h1 className="text-white font-bold m-auto">
              {currentSection?.name}
            </h1>
          </div>
          <div className="mx-auto grid min-w-appContent max-w-7xl grid-cols-2 justify-center gap-8 px-8 pb-20 pt-10 max-w-lg">
            <div className="top-[90px] flex-1 flex-col space-y-6 self-start hidden">
              <span className="text-product2-content-secondary font-mimopro font-medium text-xs">
                SECTION PROJECT
              </span>
              <hr className="!mt-2 h-[1px] border-product2-border-secondary" />
              <div className="flex items-center justify-between">
                <p className="font-mimopro font-medium text-2xl">Bot</p>
              </div>
            </div>
            <div className="flex-1 flex-col space-y-6 col-span-2">
              <span className="text-product2-content-secondary font-medium text-xs">
                LESSONS
              </span>
              <hr className="!mt-2 h-[1px] border-product2-border-secondary"></hr>
              <div className="flex flex-col space-y-3">
                {tutorials
                  .sort((a, b) => a.index - b.index)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="z-10 flex w-full items-center justify-between space-x-2 rounded-xl border border-product2-border-secondary bg-product2-background-primary p-3 cursor-pointer hover:bg-[#4a4d85]"
                    >
                      <div className="flex items-center">
                        <p className="font-mimopro font-normal text-xs min-w-[24px] self-start leading-6 text-product2-content-secondary ">
                          0{item.index + 1}
                        </p>
                        <p className="font-mimopro font-medium text-base text-product2-content-secondary">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRouter>
  );
}
