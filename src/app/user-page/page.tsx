"use client";
import { useRef, useState } from "react";
import styles from "./index.module.scss";
import { courses } from "./fake";
import Backspace from "@mui/icons-material/Backspace";
import { handleLogout } from "@/pages/lib/auth";
import { useRouter } from "next/navigation";

export interface userPageProps {}

export function UserPage(props: userPageProps) {
  const refUserInfo = useRef<HTMLDivElement | null>(null);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [modeMenu, setModeMenu] = useState("course-info");
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentTutorialIndex, setCurrentTutorialIndex] = useState(0);
  const [isOpenChooseChapter, setOpenChooseChapter] = useState(false);

  const router = useRouter();

  const [renderTutorials, setRenderTutorials] = useState<
    { type: string; data: object | ITutorial; isPass: boolean }[]
  >([]);
  const [renderTutorialChallenges, setRenderTutorialChallenges] = useState<
    { type: string; data: object | ITutorial; isPass: boolean }[]
  >([]);

  const [currentSection, setCurrentSection] = useState<ISection>({
    id: "",
    courseId: "",
    name: "",
    isLocked: false,
    description: "",
    index: 0,
    tutorials: [],
    currentTutorialIndex: 0,
    tutorialTotalCount: 0,
  });

  const [currentTutorial, setCurrentTutorial] = useState<ITutorial>({
    id: "",
    sectionId: "",
    bannerIconUrl: "",
    codeLanguage: "",
    descriptionContent: "",
    index: 0,
    isCompleted: false,
    title: "",
    type: "",
    version: 0,
    chapters: [],
    currentChapterIndex: 0,
    chapterTotalCount: 0,
  });
  const [listCourses, setListCourses] = useState(courses);
  const [currentCourse, setCurrentCourse] = useState(courses[0]);
  const [isCheckLogin, setCheckLogin] = useState(false);

  const getIconCourse = (type: string) => {
    switch (type) {
      case "Python":
        return (
          <svg
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["course-icon"]}
          >
            <path
              d="M11.93 2C6.85 2 7.17 4.21 7.17 4.21V6.5h4.85v.69H5.25S2 6.82 2 11.97s2.84 4.97 2.84 4.97h1.69v-2.39s-.09-2.85 2.79-2.85h4.81s2.7.04 2.7-2.62V4.67S17.24 2 11.93 2zM8.39 4.42c0-.49.39-.88.87-.88s.87.39.87.87c0 .49-.39.88-.87.88a.87.87 0 01-.87-.87z"
              fill="#1E96FF"
            ></path>
            <path
              d="M19.16 7.06h.04c.33 0 2.8.16 2.8 4.95v.03c0 5.14-3.25 4.77-3.25 4.77h-6.77v.69h4.85v2.29S17.15 22 12.08 22c-5.31 0-4.9-2.67-4.9-2.67v-4.41c0-2.67 2.7-2.62 2.7-2.62h4.81c2.88 0 2.79-2.85 2.79-2.85V7.06h1.69-.01zm-5.29 12.52c0 .48.39.87.87.87s.87-.39.87-.88-.39-.88-.87-.88-.87.39-.87.88v.01z"
              fill="#FFBE09"
            ></path>
          </svg>
        );
      case "Javascript":
        return (
          <svg
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["course-icon"]}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 21H21V3H3V21ZM12.796 17.039C12.796 18.791 11.769 19.589 10.271 19.589C8.917 19.589 8.132 18.888 7.732 18.042L9.11 17.209C9.376 17.68 9.618 18.078 10.197 18.078C10.754 18.078 11.104 17.861 11.104 17.016V11.264H12.796V17.039ZM16.795 19.589C15.225 19.589 14.21 18.84 13.714 17.861L15.092 17.063C15.454 17.655 15.926 18.091 16.759 18.091C17.46 18.091 17.907 17.74 17.907 17.257C17.907 16.677 17.447 16.472 16.675 16.133L16.252 15.952C15.031 15.433 14.222 14.78 14.222 13.402C14.222 12.134 15.188 11.167 16.698 11.167C17.774 11.167 18.547 11.542 19.104 12.521L17.786 13.366C17.496 12.847 17.182 12.642 16.698 12.642C16.203 12.642 15.889 12.955 15.889 13.366C15.889 13.874 16.203 14.079 16.928 14.394L17.351 14.574C18.789 15.19 19.599 15.819 19.599 17.232C19.599 18.755 18.402 19.589 16.795 19.589Z"
              fill="#FFDA1B"
            ></path>
          </svg>
        );
      default:
        break;
    }
  };
  const callGetSectionInfo = async (
    sectionId: string,
    sectionIndex: number
  ) => {
    // localStorage.setItem("CurrentSectionId", sectionId);
    // localStorage.setItem("ChooseSectionIndex", sectionIndex.toString());
    // const sectionInfoResponse = await getSectionInfo(config, sectionId);
    // console.log("sectionInfoResponse", sectionInfoResponse);
    // if (sectionInfoResponse) {
    //   setCurrentSection(sectionInfoResponse);
    //   localStorage.setItem(
    //     "TotalTutorial",
    //     sectionInfoResponse.tutorialTotalCount.toString(),
    //   );
    //   let index_tutorial: number = 0;
    //   let currentTutorialId: string = "";
    //   if (sectionInfoResponse.tutorials) {
    //     for (
    //       let index = 0;
    //       index < sectionInfoResponse.tutorials.length;
    //       index++
    //     ) {
    //       const tutorial = sectionInfoResponse.tutorials[index];
    //       if (tutorial.isCompleted === true) {
    //         index_tutorial = tutorial.index + 1;
    //         currentTutorialId = tutorial.id;
    //       } else break;
    //     }
    //   }
    //   convertToRender(sectionInfoResponse);
    //   localStorage.setItem("CurrentTutorialId", currentTutorialId);
    // }
  };
  const getTypeTutorial = (data: object | ITutorial) => {
    switch ((data as ITutorial).type) {
      case "course":
        return "Learn";
      case "practiceRequired":
        return "Practice";
      case "practiceOptional":
        return "Supercharge";
      default:
        break;
    }
  };
  const convertToRender = (sectionInfo: ISection) => {
    let mode = "center_r";
    let last_index = -1;
    let item_option = null;
    let renderTutorials_: {
      type: string;
      data: object | ITutorial;
      isPass: boolean;
    }[] = [];
    if (sectionInfo.tutorials) {
      for (let index = 0; index < sectionInfo.tutorials.length; index++) {
        let new_array: {
          type: string;
          data: object | ITutorial;
          isPass: boolean;
        }[] = [];
        if (
          sectionInfo.tutorials[index].type === "course" ||
          sectionInfo.tutorials[index].type === "practiceRequired"
        ) {
          const index_option = last_index;
          if (mode === "center_r") {
            new_array = [
              {
                type: "left_top",
                data: {},
                isPass: sectionInfo.tutorials[index].isCompleted,
              },
              {
                type: "data",
                data: sectionInfo.tutorials[index],
                isPass: sectionInfo.tutorials[index].isCompleted,
              },
              {
                type: "right_bottom",
                data: {},
                isPass: sectionInfo.tutorials[index].isCompleted,
              },
            ];
            if (index === 0)
              new_array[0] = { type: "", data: {}, isPass: false };
            mode = "right";
            last_index = 1;
          } else if (mode === "center_l") {
            new_array = [
              {
                type: "left_bottom",
                data: {},
                isPass: sectionInfo.tutorials[index].isCompleted,
              },
              {
                type: "data",
                data: sectionInfo.tutorials[index],
                isPass: sectionInfo.tutorials[index].isCompleted,
              },
              {
                type: "right_top",
                data: {},
                isPass: sectionInfo.tutorials[index].isCompleted,
              },
            ];
            mode = "left";
            last_index = 1;
          } else if (mode === "left") {
            new_array = [
              {
                type: "data",
                data: sectionInfo.tutorials[index],
                isPass: sectionInfo.tutorials[index].isCompleted,
              },
              { type: "", data: {}, isPass: false },
              { type: "", data: {}, isPass: false },
            ];
            mode = "center_r";
            last_index = 0;
          } else if (mode === "right") {
            new_array = [
              { type: "", data: {}, isPass: false },
              { type: "", data: {}, isPass: false },
              {
                type: "data",
                data: sectionInfo.tutorials[index],
                isPass: sectionInfo.tutorials[index].isCompleted,
              },
            ];
            mode = "center_l";
            last_index = 2;
          }
          if (item_option !== null) {
            new_array[index_option] = {
              type: "data",
              data: item_option,
              isPass: item_option.isCompleted,
            };
            item_option = null;
          }
          if (sectionInfo.tutorials[index].type === "practiceRequired") {
            console.log("last_index", last_index);
            if (last_index === 0 || last_index === 2) {
              if (
                sectionInfo.tutorials[index + 1]?.type === "practiceOptional"
              ) {
                new_array[1] = {
                  type: "data",
                  data: sectionInfo.tutorials[index + 1],
                  isPass: sectionInfo.tutorials[index + 1].isCompleted,
                };
              }
              if (sectionInfo.tutorials[index + 2]?.type === "challenges") {
                if (mode === "left") mode = "center_l";
                else if (mode === "right") mode = "center_r";
                else if (mode === "center_l") mode = "right";
                else if (mode === "center_r") mode = "left";
              }
              index++;
            }
          }
          renderTutorials_ = [...renderTutorials_, ...new_array];
        } else if (sectionInfo.tutorials[index].type === "practiceOptional") {
          item_option = sectionInfo.tutorials[index];
          if (sectionInfo.tutorials[index + 1].type === "challenges") {
            new_array = [
              { type: "", data: {}, isPass: false },
              { type: "", data: {}, isPass: false },
              { type: "", data: {}, isPass: false },
            ];
            new_array[last_index] = {
              type: "data",
              data: item_option,
              isPass: item_option.isCompleted,
            };
            if (mode === "left")
              new_array[0] = {
                type: "straight_left",
                data: {},
                isPass: item_option.isCompleted,
              };
            else if (mode === "right")
              new_array[2] = {
                type: "straight_right",
                data: {},
                isPass: item_option.isCompleted,
              };
            renderTutorials_ = [...renderTutorials_, ...new_array];
          }
        }
      }
      setRenderTutorials(renderTutorials_);
      if (
        sectionInfo.tutorials[sectionInfo.tutorials.length - 1].type ===
        "challenges"
      ) {
        const new_array = [
          { type: "", data: {}, isPass: false },
          { type: "", data: {}, isPass: false },
          { type: "", data: {}, isPass: false },
        ];
        if (mode === "right")
          new_array[2] = { type: "straight_left", data: {}, isPass: false };
        else if (mode === "left")
          new_array[0] = { type: "straight_right", data: {}, isPass: false };
        else new_array[1] = { type: "|", data: {}, isPass: false };
        setRenderTutorialChallenges(new_array);
      }
    }
  };

  const handleCodingChallenge = () => {
    window.location.replace("/coding-challenges");
  };
  return (
    <div className={styles["user-page"]}>
      <div className={styles["user-page-header-div"]}>
        <div className={styles["user-page-header"]}>
          <div className={styles["user-page-header-content"]}>
            <div className={styles["user-page-left"]}>
              <a className={styles["logo-image"]} href="/web">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/codekids-480c0.appspot.com/o/shared-images%2Flogo.png?alt=media&token=0bdd2dc0-01cf-4dfa-8db5-63aff26bb821"
                  alt="Codekids Logo"
                />
              </a>
              <div className={styles["user-page-menu"]}>
                <a
                  href="/web"
                  className={
                    styles["user-page-menu-item"] + " " + styles["active"]
                  }
                >
                  <span>Learn </span>
                </a>
                <a href="/build" className={styles["user-page-menu-item"]}>
                  <span>Build</span>
                </a>
              </div>
            </div>
            <div className={styles["user-page-right"]}>
              <div
                className={styles["user-information"]}
                tabIndex={1}
                ref={(ref) => (refUserInfo.current = ref)}
              >
                <div className={styles["user-avatar"]}>
                  <img alt="Avatar" src={""}></img>
                </div>
                <div className={styles["user-info-menu"]}>
                  <div
                    className={styles["user-info-menu-item"]}
                    onClick={async () => {
                      await handleLogout();
                      router.push("/login");
                    }}
                  >
                    <svg
                      height="100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 7.06998V5.33331C12 3.12665 10.2067 1.33331 8.00001 1.33331C5.79334 1.33331 4.00001 3.12665 4.00001 5.33331V7.06998C3.23334 7.28998 2.66667 7.99331 2.66667 8.83331V12.8333C2.66667 13.8433 3.49001 14.6666 4.50001 14.6666H11.5C12.51 14.6666 13.3333 13.8433 13.3333 12.8333V8.83331C13.3333 7.99665 12.7667 7.28998 12 7.06998ZM8.00001 2.33331C9.65334 2.33331 11 3.67998 11 5.33331V6.99998H5.00001V5.33331C5.00001 3.67998 6.34667 2.33331 8.00001 2.33331ZM12.3333 12.8333C12.3333 13.2933 11.96 13.6666 11.5 13.6666H4.50001C4.04001 13.6666 3.66667 13.2933 3.66667 12.8333V8.83331C3.66667 8.37331 4.04001 7.99998 4.50001 7.99998H11.5C11.96 7.99998 12.3333 8.37331 12.3333 8.83331V12.8333Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Log out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className={
            styles["user-page-courses-menu-div"] +
            (isOpenMenu ? " " + styles["open"] : "")
          }
        >
          <div
            className={
              styles["user-page-courses-menu"] +
              (isOpenMenu
                ? " " + styles["animate-slide-in-left"]
                : " " + styles["animate-slide-out-left"])
            }
          >
            <div
              className={
                styles["user-page-course-info"] +
                (modeMenu === "course-info"
                  ? " " + styles["animate-enter-delay"]
                  : " " + styles["animate-leave"])
              }
            >
              <div className={styles["user-page-course-info-header"]}>
                <div className={styles["user-page-course-info-header-main"]}>
                  <p>CAREER PATH</p>
                  <div
                    className={
                      styles["user-page-course-info-header-switch-button"]
                    }
                    onClick={() => {
                      setModeMenu("list-course");
                    }}
                  >
                    <h2>{currentCourse.name}</h2>
                    <i className="material-icons">repeat</i>
                  </div>
                  <div
                    className={styles["user-page-course-info-progress-track"]}
                  >
                    <div
                      className={styles["user-page-course-info-progress-bar"]}
                      style={{
                        width:
                          (currentSectionIndex * 100) /
                            currentCourse.sections.length +
                          "%",
                      }}
                    />
                    <div
                      className={
                        styles["user-page-course-info-progress-bar-default"]
                      }
                    />
                  </div>
                  <div className={styles["user-page-course-info-progress"]}>
                    <div>
                      {(currentSectionIndex * 100) /
                        currentCourse.sections.length +
                        "%"}{" "}
                      Complete
                    </div>
                    <div>
                      {currentSectionIndex}/{currentCourse.sections.length}
                    </div>
                  </div>
                </div>
                <div className={styles["user-page-course-info-section-title"]}>
                  SECTIONS
                </div>
              </div>
              <div className={styles["user-page-course-info-sections"]}>
                {currentCourse.sections.map((section, index_section) => {
                  return (
                    <div
                      key={index_section}
                      className={
                        styles["user-page-course-info-section"] +
                        (localStorage.getItem("CurrentSectionId") === section.id
                          ? " " + styles["select"]
                          : "")
                      }
                      onClick={() => {
                        setCurrentSectionIndex(section.index);
                        // callGetSectionInfo(section.id, section.index);
                      }}
                    >
                      <div>
                        {section.index < 9 ? "0" : ""}
                        {section.index + 1}. {section.name}
                      </div>
                      {section.isLocked === false ? (
                        <div>
                          {section.currentTutorialIndex}/
                          {section.tutorialTotalCount}
                        </div>
                      ) : (
                        <i className="material-icons">lock</i>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={
                styles["user-page-list-course-info"] +
                (modeMenu === "course-info"
                  ? " " + styles["animate-leave"]
                  : " " + styles["animate-enter-delay"])
              }
            >
              <div className={styles["user-page-list-course-info-content"]}>
                <div
                  className={styles["user-page-list-course-info-switch-button"]}
                  onClick={() => {
                    setModeMenu("course-info");
                  }}
                >
                  <Backspace />
                </div>

                <div className={styles["user-page-list-course-info-title"]}>
                  COURSES
                </div>
                {listCourses.map((course, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        styles["user-page-list-course-item"] +
                        (course.id === localStorage.getItem("CurrentCourseId")
                          ? " " + styles["choose"]
                          : "")
                      }
                      onClick={() => {
                        setCurrentCourse(course);
                        setModeMenu("course-info");
                        // if (
                        //   course.id !==
                        //     localStorage.getItem("CurrentCourseId") &&
                        //   course.id
                        // ) {
                        //   localStorage.setItem("CurrentCourseId", course.id);
                        //   window.location.reload();
                        // }
                      }}
                    >
                      {getIconCourse(course.name)}
                      <span>{course.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles["user-page-content"]}>
          <div className={styles["user-page-content-header-div"]}>
            <div className={styles["user-page-content-header"]}>
              <div className={styles["user-page-content-left"]}>
                <div
                  className={styles["user-page-content-button-menu"]}
                  onClick={() => {
                    setOpenMenu(!isOpenMenu);
                  }}
                >
                  <i className="material-icons">
                    {/* {isOpenMenu ? "menu_open" : "menu"} */}
                  </i>
                  <span
                    className={styles["user-page-content-button-menu-title"]}
                  >
                    {currentCourse.name}
                  </span>
                </div>
              </div>
              <div className={styles["user-page-content-center"]}>
                {currentSection.index < 9 ? "0" : ""}
                {currentSection.index + 1}. {currentSection.name}
              </div>
              <div className={styles["user-page-content-right"]}>
                <div className={styles["user-page-cprogress-tutorial-title"]}>
                  {currentTutorialIndex}/{currentSection.tutorials?.length}
                </div>
                <div className={styles["user-page-progress-tutorial"]}>
                  <div className={styles["user-page-progress-tutorial-track"]}>
                    <div
                      className={styles["user-page-progress-tutorial-bar"]}
                      style={
                        {
                          // width: `${getPercentTutorial()}%`,
                        }
                      }
                    />
                    <div
                      className={
                        styles["user-page-progress-tutorial-bar-default"]
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["user-page-content-main"]}>
            <div className="w-full">
              <iframe
                width="720"
                height="520"
                src="https://www.youtube.com/embed/x7X9w_GIm1s?si=dkK22hb9yNEqbRw3"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            {/* <div style={{ height: "2.5rem" }}></div> */}
            {/* <section className={styles["user-page-content-main-grid"]}> */}
            {/*   {renderTutorials.map((item, index) => { */}
            {/*     switch (item.type) { */}
            {/*       case "": */}
            {/*         return <div key={index}></div>; */}
            {/*       case "left_bottom": */}
            {/*         return ( */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles["user-page-content-grid-line-left-bottom"] + */}
            {/*               (item.isPass ? " " + styles["line-pass"] : "") */}
            {/*             } */}
            {/*             key={index} */}
            {/*           ></div> */}
            {/*         ); */}
            {/*       case "left_top": */}
            {/*         return ( */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles["user-page-content-grid-line-left-top"] + */}
            {/*               (item.isPass ? " " + styles["line-pass"] : "") */}
            {/*             } */}
            {/*             key={index} */}
            {/*           ></div> */}
            {/*         ); */}
            {/*       case "right_top": */}
            {/*         return ( */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles["user-page-content-grid-line-right-top"] + */}
            {/*               (item.isPass ? " " + styles["line-pass"] : "") */}
            {/*             } */}
            {/*             key={index} */}
            {/*           ></div> */}
            {/*         ); */}
            {/*       case "right_bottom": */}
            {/*         return ( */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles["user-page-content-grid-line-right-bottom"] + */}
            {/*               (item.isPass ? " " + styles["line-pass"] : "") */}
            {/*             } */}
            {/*             key={index} */}
            {/*           ></div> */}
            {/*         ); */}
            {/*       case "straight_left": */}
            {/*         return ( */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles["user-page-content-grid-line-straight-left"] + */}
            {/*               (item.isPass ? " " + styles["line-pass"] : "") */}
            {/*             } */}
            {/*             key={index} */}
            {/*           ></div> */}
            {/*         ); */}
            {/*       case "straight_right": */}
            {/*         return ( */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles["user-page-content-grid-line-straight-right"] + */}
            {/*               (item.isPass ? " " + styles["line-pass"] : "") */}
            {/*             } */}
            {/*             key={index} */}
            {/*           ></div> */}
            {/*         ); */}
            {/*       case "data": */}
            {/*         return ( */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles["user-page-content-grid-data-div"] + */}
            {/*               (item.isPass ? " " + styles["pass"] : "") + */}
            {/*               ((item.data as ITutorial).index > currentTutorialIndex */}
            {/*                 ? " " + styles["lock"] */}
            {/*                 : " " + styles["normal"]) */}
            {/*             } */}
            {/*             key={index} */}
            {/*             onClick={async () => { */}
            {/*               if ( */}
            {/*                 (item.data as ITutorial).index <= */}
            {/*                 currentTutorialIndex */}
            {/*               ) { */}
            {/*                 localStorage.setItem( */}
            {/*                   "ChooseTutorialId", */}
            {/*                   (item.data as ITutorial).id, */}
            {/*                 ); */}
            {/*                 localStorage.setItem( */}
            {/*                   "ChooseTutorialIndex", */}
            {/*                   (item.data as ITutorial).index.toString(), */}
            {/*                 ); */}
            {/*                 localStorage.setItem( */}
            {/*                   "IsPassTutorial", */}
            {/*                   (item.data as ITutorial).isCompleted + "", */}
            {/*                 ); */}
            {/*                 const tutorialResponse = await getTutorialInfo( */}
            {/*                   config, */}
            {/*                   (item.data as ITutorial).id, */}
            {/*                 ); */}
            {/*                 console.log("tutorialResponse", tutorialResponse); */}
            {/*                 if (tutorialResponse) { */}
            {/*                   setCurrentTutorial(tutorialResponse); */}
            {/*                   if (!(item.data as ITutorial).isCompleted) { */}
            {/*                     if ( */}
            {/*                       tutorialResponse.currentChapterIndex < */}
            {/*                       tutorialResponse.chapterTotalCount */}
            {/*                     ) { */}
            {/*                       if (tutorialResponse.chapters) { */}
            {/*                         localStorage.setItem( */}
            {/*                           "ChooseChapterId", */}
            {/*                           tutorialResponse.chapters[ */}
            {/*                             tutorialResponse.currentChapterIndex */}
            {/*                           ].id, */}
            {/*                         ); */}
            {/*                         localStorage.setItem( */}
            {/*                           "ChooseChapterIndex", */}
            {/*                           tutorialResponse.currentChapterIndex.toString(), */}
            {/*                         ); */}
            {/*                         localStorage.setItem( */}
            {/*                           "TotalChapter", */}
            {/*                           tutorialResponse.chapterTotalCount.toString(), */}
            {/*                         ); */}
            {/*                       } */}
            {/*                       window.location.replace("/lesson"); */}
            {/*                     } */}
            {/*                   } else { */}
            {/*                     setOpenChooseChapter(true); */}
            {/*                   } */}
            {/*                 } */}
            {/*               } */}
            {/*             }} */}
            {/*           > */}
            {/*             {(item.data as ITutorial).index === */}
            {/*               currentTutorialIndex && ( */}
            {/*               <div */}
            {/*                 className={ */}
            {/*                   styles["user-page-content-grid-tutorial-choose"] */}
            {/*                 } */}
            {/*               ></div> */}
            {/*             )} */}
            {/*             <div className={styles["user-page-content-grid-data"]}> */}
            {/*               <div */}
            {/*                 className={ */}
            {/*                   styles["user-page-content-grid-data-content"] */}
            {/*                 } */}
            {/*               > */}
            {/*                 <div */}
            {/*                   className={ */}
            {/*                     styles["user-page-content-grid-tutorial-type"] */}
            {/*                   } */}
            {/*                 > */}
            {/*                   {getTypeTutorial(item.data)} */}
            {/*                 </div> */}
            {/*                 <div */}
            {/*                   className={ */}
            {/*                     styles["user-page-content-grid-tutorial-title"] */}
            {/*                   } */}
            {/*                 > */}
            {/*                   {(item.data as ITutorial).title} */}
            {/*                 </div> */}
            {/*               </div> */}
            {/*               {(item.data as ITutorial).isCompleted ? ( */}
            {/*                 <i */}
            {/*                   className={ */}
            {/*                     "material-icons " + */}
            {/*                     styles["user-page-content-grid-tutorial-icon"] */}
            {/*                   } */}
            {/*                 > */}
            {/*                   done */}
            {/*                 </i> */}
            {/*               ) : (item.data as ITutorial).type === */}
            {/*                 "practiceOptional" ? ( */}
            {/*                 <i */}
            {/*                   className={ */}
            {/*                     "material-icons " + */}
            {/*                     styles["user-page-content-grid-tutorial-icon"] */}
            {/*                   } */}
            {/*                 > */}
            {/*                   bolt */}
            {/*                 </i> */}
            {/*               ) : (item.data as ITutorial).index === */}
            {/*                   currentTutorialIndex && */}
            {/*                 currentSectionIndex === currentSection.index ? ( */}
            {/*                 (item.data as ITutorial).currentChapterIndex === */}
            {/*                 0 ? ( */}
            {/*                   <i */}
            {/*                     className={ */}
            {/*                       "material-icons " + */}
            {/*                       styles["user-page-content-grid-tutorial-icon"] */}
            {/*                     } */}
            {/*                   > */}
            {/*                     play_arrow */}
            {/*                   </i> */}
            {/*                 ) : ( */}
            {/*                   <div */}
            {/*                     className={ */}
            {/*                       styles[ */}
            {/*                         "user-page-content-grid-tutorial-progress" */}
            {/*                       ] */}
            {/*                     } */}
            {/*                   > */}
            {/*                     <CircularProgressBar */}
            {/*                       title={`${ */}
            {/*                         (item.data as ITutorial).currentChapterIndex */}
            {/*                       }/${ */}
            {/*                         (item.data as ITutorial).chapterTotalCount */}
            {/*                       }`} */}
            {/*                       percent={ */}
            {/*                         ((item.data as ITutorial) */}
            {/*                           .currentChapterIndex * */}
            {/*                           100) / */}
            {/*                         (item.data as ITutorial).chapterTotalCount */}
            {/*                       } */}
            {/*                     ></CircularProgressBar> */}
            {/*                   </div> */}
            {/*                 ) */}
            {/*               ) : ( */}
            {/*                 <i */}
            {/*                   className={ */}
            {/*                     "material-icons " + */}
            {/*                     styles["user-page-content-grid-tutorial-icon"] */}
            {/*                   } */}
            {/*                 > */}
            {/*                   lock */}
            {/*                 </i> */}
            {/*               )} */}
            {/*             </div> */}
            {/*           </div> */}
            {/*         ); */}
            {/*       default: */}
            {/*         break; */}
            {/*     } */}
            {/*   })} */}
            {/* </section> */}
            {/* <section */}
            {/*   className={styles["user-page-content-challenge-grid-line"]} */}
            {/* > */}
            {/*   {renderTutorialChallenges.map((render_type, index) => { */}
            {/*     switch (render_type.type) { */}
            {/*       case "": */}
            {/*         return <div key={index}></div>; */}
            {/*       case "straight_left": */}
            {/*         return ( */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles[ */}
            {/*                 "user-page-content-challenge-grid-line-straight-left" */}
            {/*               ] */}
            {/*             } */}
            {/*             key={index} */}
            {/*           ></div> */}
            {/*         ); */}
            {/*       case "straight_right": */}
            {/*         return ( */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles[ */}
            {/*                 "user-page-content-challenge-grid-line-straight-right" */}
            {/*               ] */}
            {/*             } */}
            {/*             key={index} */}
            {/*           ></div> */}
            {/*         ); */}

            {/*       default: */}
            {/*         break; */}
            {/*     } */}
            {/*   })} */}
            {/* </section> */}
            {/* {currentTutorialIndex === 7 && ( */}
            {/*   <section className={styles["user-page-content-challenge-grid"]}> */}
            {/*     <div */}
            {/*       className={styles["user-page-content-challenge"]} */}
            {/*       onClick={handleCodingChallenge} */}
            {/*     > */}
            {/*       <div */}
            {/*         className={styles["user-page-content-challenge-content"]} */}
            {/*       > */}
            {/*         <div */}
            {/*           className={ */}
            {/*             styles["user-page-content-challenge-content-left"] */}
            {/*           } */}
            {/*         > */}
            {/*           <div */}
            {/*             className={ */}
            {/*               styles[ */}
            {/*                 "user-page-content-challenge-content-left-title" */}
            {/*               ] */}
            {/*             } */}
            {/*           > */}
            {/*             Coding challenge */}
            {/*           </div> */}

            {/*           <div */}
            {/*             className={ */}
            {/*               styles[ */}
            {/*                 "user-page-content-challenge-content-left-description" */}
            {/*               ] */}
            {/*             } */}
            {/*           > */}
            {/*             Recreate the code output without additional guidance */}
            {/*           </div> */}
            {/*         </div> */}
            {/*         <div */}
            {/*           className={ */}
            {/*             styles["user-page-content-challenge-content-right"] */}
            {/*           } */}
            {/*         > */}
            {/*           {currentTutorialIndex === 7 ? ( */}
            {/*             <i */}
            {/*               className={ */}
            {/*                 "material-icons " + */}
            {/*                 styles["user-page-content-grid-tutorial-icon"] */}
            {/*               } */}
            {/*             > */}
            {/*               play_arrow */}
            {/*             </i> */}
            {/*           ) : ( */}
            {/*             <i */}
            {/*               className={ */}
            {/*                 "material-icons " + */}
            {/*                 styles["user-page-content-grid-tutorial-icon"] */}
            {/*               } */}
            {/*             > */}
            {/*               lock */}
            {/*             </i> */}
            {/*           )} */}
            {/*         </div> */}
            {/*       </div> */}
            {/*     </div> */}
            {/*   </section> */}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
