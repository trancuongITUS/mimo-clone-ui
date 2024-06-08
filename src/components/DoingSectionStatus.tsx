import { TutorialAPI } from "@/api/tutorials";
import { TSection } from "@/utils/types";
import React, { useEffect, useState } from "react";

type Props = {
  doingSection: number;
  sectionId: string;
};

export const DoingSectionStatus = ({ doingSection, sectionId }: Props) => {
  const [tutorialCount, setTutorialCount] = useState<number>(0);

  useEffect(() => {
    const fetchTutorialList = async (sectionId) => {
      const res = await TutorialAPI.getTutorialsBySectionId(sectionId);
      setTutorialCount(res.length);
    };
    fetchTutorialList(sectionId);
  }, [sectionId]);

  return (
    <div className="font-mimopro font-normal text-xs min-w-[24px] text-center text-product2-content-secondary">
      {doingSection}/{tutorialCount}
    </div>
  );
};
