import { ChapterAPI } from "@/api/chapters";
import { TTutorial } from "@/utils/types";
import React, { useEffect, useState } from "react";

type TProps = {
  doingChapter: number;
  tutorial: TTutorial;
};

const DoingTutorialStatus = ({ doingChapter, tutorial }: TProps) => {
  const [chapterCount, setChapterCount] = useState<number>(0);

  useEffect(() => {
    const fetchChapterList = async (tutorialId) => {
      const res = await ChapterAPI.getChaptersByTutorialId(tutorialId);
      setChapterCount(res.length);
    };
    fetchChapterList(tutorial.id);
  }, [tutorial]);

  return (
    <div className="font-mimopro font-normal text-xs min-w-[24px] text-center text-product2-content-secondary">
      {doingChapter}/{chapterCount}
    </div>
  );
};

export default DoingTutorialStatus;
