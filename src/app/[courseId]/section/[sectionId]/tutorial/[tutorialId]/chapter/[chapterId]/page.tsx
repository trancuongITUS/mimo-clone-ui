/* eslint-disable @next/next/no-img-element */
"use client";
import { ChapterAPI } from "@/api/chapters";
import PrePostInteractionModule from "@/components/PreInteractionModule";
import ProtectedRouter from "@/components/ProtectedRouter";
import { handleLogout } from "@/utils/lib/auth";
import {
  PrePostInteractionModuleType,
  PrePostInteractionModuleVisibleIf,
  TChapter,
} from "@/utils/types";
import { Button, Popover } from "antd";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InteractModule from "@/components/InteractionModule";
import eventEmitter, { EMIT_EVENT } from "@/utils/eventEmitter";
import AnswerGuide, {
  AnswerGuideMode,
} from "@/components/PostInteractionModule";

const UserPopoverContent = () => {
  const router = useRouter();
  return (
    <div className="font-semibold rounded-xl">
      <span className="rounded-full px-2 py-1 text-xs font-bold uppercase leading-[18px] text-white bg-[#78d86b] ">
        Mimo Basic
      </span>
      <a
        className="select-none outline-none !mt-3 flex items-center space-x-2 rounded-lg px-2 py-1 hover:bg-[#4a4d85] hover:text-inherit"
        data-orientation="vertical"
        data-radix-collection-item=""
        href="/settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M9.995 21.8c.655.13 1.33.2 2.005.2v-.005c.67 0 1.35-.065 2.005-.2.58-.115.995-.63.995-1.225v-1.155a7.8 7.8 0 0 0 1.925-1.11l1 .575c.515.295 1.17.195 1.555-.245a10 10 0 0 0 2.01-3.48 1.25 1.25 0 0 0-.565-1.47l-1-.575a8.2 8.2 0 0 0 0-2.22l1-.58c.51-.295.75-.915.565-1.47a10 10 0 0 0-2.01-3.48c-.39-.44-1.04-.54-1.555-.245l-1 .575a8 8 0 0 0-1.92-1.11V3.425c0-.59-.42-1.11-.995-1.225-1.31-.27-2.7-.27-4.015 0-.58.115-.995.63-.995 1.225V4.58a7.8 7.8 0 0 0-1.925 1.11l-1-.575a1.25 1.25 0 0 0-1.555.245 10 10 0 0 0-2.01 3.48c-.185.555.05 1.175.565 1.47l1 .58a8.2 8.2 0 0 0 0 2.22l-1 .58c-.51.295-.75.915-.565 1.47a9.9 9.9 0 0 0 2.01 3.48c.39.44 1.04.54 1.555.245l1-.575c.59.46 1.235.83 1.925 1.11v1.155c0 .59.42 1.11.995 1.225m3.505-1.43a8.6 8.6 0 0 1-3 0v-2.02l-.52-.17a6.5 6.5 0 0 1-2.325-1.345l-.405-.365-1.75 1.01A8.4 8.4 0 0 1 4 14.885l1.75-1.01-.11-.53Q5.499 12.684 5.5 12c0-.455.05-.905.14-1.345l.11-.53L4 9.115A8.4 8.4 0 0 1 5.5 6.52l1.75 1.01.405-.365A6.4 6.4 0 0 1 9.98 5.82l.52-.17V3.63a8.6 8.6 0 0 1 3 0v2.015l.52.17c.865.28 1.645.735 2.325 1.345l.405.365 1.75-1.01A8.4 8.4 0 0 1 20 9.11l-1.75 1.01.11.53q.141.661.14 1.345c0 .455-.05.905-.14 1.345l-.11.53L20 14.88a8.4 8.4 0 0 1-1.5 2.6l-1.75-1.01-.405.365a6.4 6.4 0 0 1-2.325 1.345l-.52.17zM8 12c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4m1.5 0a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Settings</span>
      </a>
      <a
        className="select-none outline-none flex items-center space-x-2 rounded-lg px-2 py-1 hover:bg-[#4a4d85] hover:text-inherit"
        role="menuitem"
        target="_blank"
        data-orientation="vertical"
        data-radix-collection-item=""
        href="https://getmimo.zendesk.com/hc/en-us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M5.038 10h.712a2.75 2.75 0 0 1 2.75 2.75v1.5A2.75 2.75 0 0 1 6 16.989v.761c0 .69.56 1.25 1.25 1.25h2.378a2.25 2.25 0 0 1 2.122-1.5h.5a2.25 2.25 0 0 1 0 4.5h-.5a2.25 2.25 0 0 1-2.122-1.5H7.25a2.75 2.75 0 0 1-2.75-2.75V17h-1v-6.25A8.75 8.75 0 0 1 12.25 2 8.75 8.75 0 0 1 21 10.75V17h-2.25A2.75 2.75 0 0 1 16 14.25v-1.5A2.75 2.75 0 0 1 18.75 10h.712a7.25 7.25 0 0 0-7.212-6.5A7.25 7.25 0 0 0 5.038 10m.712 1.5H5v4h.75c.69 0 1.25-.56 1.25-1.25v-1.5c0-.69-.56-1.25-1.25-1.25m13 0c-.69 0-1.25.56-1.25 1.25v1.5c0 .69.56 1.25 1.25 1.25h.75v-4zM11 19.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Support</span>
      </a>
      <div
        role="menuitem"
        className="select-none outline-none"
        data-orientation="vertical"
        data-radix-collection-item=""
      >
        <button
          className="flex w-full items-center space-x-2 rounded-lg px-2 py-1 hover:text-inherit hover:bg-[#4a4d85] text-white"
          role="menuitem"
          onClick={async () => {
            await handleLogout();
            router.push("/login");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M5.865 20.135c.24.235.55.365.885.365H14v1.505H6.75a2.73 2.73 0 0 1-1.945-.805A2.73 2.73 0 0 1 4 19.255v-14.5A2.756 2.756 0 0 1 6.75 2H14v1.505H6.75c-.69 0-1.25.56-1.25 1.25V19.25c0 .335.13.65.365.885M16.53 7.215l4.145 4.145c.485.49.485 1.285 0 1.77l-4.145 4.145-1.06-1.06L18.685 13H10v-1.5h8.695L15.47 8.275z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

enum BOTTOM_BUTTON_MODE {
  NEXT,
  SUBMIT,
}

const ChapterPage = () => {
  const { chapterId } = useParams<{
    courseId: string;
    sectionId: string;
    tutorialId: string;
    chapterId: string;
  }>();
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const router = useRouter();

  const lesson = searchParam.get("lesson") ?? 0;
  const [currentChapter, setCurrentChapter] = useState<TChapter>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [bottomBtnMode, setBottomBtnMode] = useState<BOTTOM_BUTTON_MODE>(
    BOTTOM_BUTTON_MODE.NEXT
  );
  const currentLesson = useMemo(
    () =>
      (currentChapter?.lessons || []).find(
        (item) => item.index.toString() === lesson
      ),
    [currentChapter, lesson]
  );
  console.log("🚀 ~ ChapterPage ~ currentLesson:", currentLesson);

  useEffect(() => {
    if (currentLesson?.interactionModules.length > 0)
      setBottomBtnMode(BOTTOM_BUTTON_MODE.SUBMIT);

    eventEmitter.emit(EMIT_EVENT.SHOW_ANSWER_GUIDE, {
      mode: AnswerGuideMode.NONE,
    });
    setIsCorrectAnswer(false);
  }, [currentLesson]);

  useEffect(() => {
    const fetchCurrentChapter = async (chapterId) => {
      const res = await ChapterAPI.getChaptersById(chapterId);
      setCurrentChapter(res);
    };
    fetchCurrentChapter(chapterId);
  }, []);

  useEffect(() => {
    eventEmitter.on(EMIT_EVENT.SUBMIT_ANSWER, (isCorrect: boolean) => {
      setIsCorrectAnswer(isCorrect);
    });
  }, []);

  const handleMovePreviousLesson = () => {
    const previousIndex = Number(lesson) - 1 >= 0 ? Number(lesson) - 1 : 0;
    const updatedSearchParams = new URLSearchParams(pathname.toString());
    updatedSearchParams.set("lesson", previousIndex.toString());

    window.history.pushState(null, "", "?" + updatedSearchParams.toString());
  };

  const handleMoveNextLesson = () => {
    const nextIndex = Number(lesson) + 1;

    if (nextIndex >= currentChapter?.lessons.length || 0) {
      router.push("/user-page");
      return;
    }

    const updatedSearchParams = new URLSearchParams(pathname.toString());
    updatedSearchParams.set("lesson", nextIndex.toString());

    window.history.pushState(null, "", "?" + updatedSearchParams.toString());
  };

  const handleSubmitAnswer = () => {
    if (isCorrectAnswer) {
      setBottomBtnMode(BOTTOM_BUTTON_MODE.NEXT);
      const answerGuideMsg = currentLesson?.prePostInteractionModules.find(
        (item) =>
          item.type === PrePostInteractionModuleType.POST &&
          item.visibleIf !== PrePostInteractionModuleVisibleIf.WRONG
      )?.content;
      const DEFAULT_TRUE_ANSWER_MSG = "Lesson solved. Good job!";
      eventEmitter.emit(EMIT_EVENT.SHOW_ANSWER_GUIDE, {
        mode: AnswerGuideMode.CORRECT,
        content: answerGuideMsg || DEFAULT_TRUE_ANSWER_MSG,
      });
    } else {
      const answerGuideMsg = currentLesson?.prePostInteractionModules.find(
        (item) =>
          item.type === PrePostInteractionModuleType.POST &&
          item.visibleIf === PrePostInteractionModuleVisibleIf.WRONG
      )?.content;

      const DEFAULT_WRONG_ANSWER_MSG = "It's wrong. Try again !";
      eventEmitter.emit(EMIT_EVENT.SHOW_ANSWER_GUIDE, {
        mode: AnswerGuideMode.WRONG,
        content: answerGuideMsg || DEFAULT_WRONG_ANSWER_MSG,
      });
    }
  };

  return (
    <ProtectedRouter>
      <div className="h-screen flex flex-col">
        <div className="z-[31] flex h-12 flex-shrink-0 items-center space-x-4 bg-product2-background-secondary pr-2 text-product-text-secondary-dark">
          <div className="flex h-full flex-1 items-center pl-2">
            <button className="mr-4 flex h-8 w-8 items-center justify-center rounded-lg text-product-button-text-enabled-dark hover:bg-product2-background-tertiary ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 text-white"
              >
                <path
                  fill="currentColor"
                  d="m20.28 4.78-1.06-1.06L12 10.94 4.78 3.72 3.72 4.78 10.94 12l-7.22 7.22 1.06 1.06L12 13.06l7.22 7.22 1.06-1.06L13.06 12l7.22-7.22Z"
                ></path>
              </svg>
            </button>
            <h2 className="text-product-text-primary-dark font-mimopro font-normal text-sm mr-2">
              {currentChapter?.title}
            </h2>
          </div>
          <div className="flex flex-grow-[2] items-center justify-center space-x-2">
            <span className="flex">
              <button
                className="flex rounded-xl p-1 cursor-pointer text-product2-content-primary hover:bg-product2-background-tertiary"
                onClick={() => handleMovePreviousLesson()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-white"
                >
                  <path
                    fill="currentColor"
                    d="m14.22 18.78-5.895-5.895a1.258 1.258 0 0 1 0-1.77L14.22 5.22l1.06 1.06L9.56 12l5.72 5.72-1.06 1.06Z"
                  ></path>
                </svg>
              </button>
            </span>
            <div className="relative flex h-1.5 flex-grow gap-1 overflow-hidden">
              {currentChapter?.lessons.map((item, index) => (
                <span className="flex grow" key={item.id}>
                  <span
                    className={
                      "inline-block cursor-default grow rounded-lg border-2 border-transparent " +
                      (index <= Number(lesson)
                        ? "bg-product-progress-primary-dark"
                        : "bg-product-progress-empty-dark")
                    }
                  ></span>
                </span>
              ))}
            </div>
            <span
              className="ml-4 flex rounded-xl p-1 cursor-pointer text-product2-content-primary hover:bg-product2-background-tertiary"
              onClick={handleMoveNextLesson}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                className=" h-6 w-6 rotate-180 text-white cursor-pointer"
              >
                <path
                  fill="currentColor"
                  d="m14.22 18.78-5.895-5.895a1.258 1.258 0 0 1 0-1.77L14.22 5.22l1.06 1.06L9.56 12l5.72 5.72-1.06 1.06Z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2 whitespace-nowrap text-xs">
            <Popover
              arrow={false}
              trigger="click"
              content={<UserPopoverContent />}
              placement="bottomRight"
              overlayClassName="border-2 border-[#4a4d85] rounded-xl min-w-[240px]"
            >
              <img
                src={"https://i.pravatar.cc/300"}
                alt="avatar"
                width={32}
                height={32}
                className={"rounded-full cursor-pointer"}
              />
            </Popover>
          </div>
        </div>
        <div className="flex h-full flex-col items-center overflow-y-auto justify-center">
          <div className="flex w-full justify-center bg-product-background-primary-light bg-product-background-primary-dark">
            <div className="relative flex min-h-blockmode max-w-full flex-shrink-0 items-center  pt-10  text-product-text-primary-light text-product-text-primary-dark">
              <div className="flex flex-col">
                <div className="flex">
                  <div className="relative flex w-[640px] flex-col">
                    {currentLesson?.prePostInteractionModules
                      .filter(
                        (item) => item.type === PrePostInteractionModuleType.PRE
                      )
                      .map((modulePost) => (
                        <PrePostInteractionModule
                          modulePost={modulePost}
                          key={modulePost.id}
                        />
                      ))}
                    {currentLesson?.interactionModules.map((module) => (
                      <InteractModule module={module} key={module.id} />
                    ))}
                    <div className="flex justify-center mt-5">
                      {bottomBtnMode === BOTTOM_BUTTON_MODE.NEXT ? (
                        <Button
                          icon={<ArrowForwardIcon />}
                          onClick={handleMoveNextLesson}
                        >
                          <strong>Continue</strong>
                        </Button>
                      ) : (
                        <Button
                          icon={<PlayArrowRoundedIcon />}
                          onClick={handleSubmitAnswer}
                        >
                          <strong>Submit</strong>
                        </Button>
                      )}
                      <AnswerGuide />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRouter>
  );
};

export default ChapterPage;
