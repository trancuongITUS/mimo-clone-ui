"use client";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import data_suggest_courses from "./data";
import styles from "./index.module.css";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
export default function SuggestCodePage() {
  const [current_question, setCurrentQuestion] = useState(0);
  const [name, setName] = useState("");
  const [courses, setCourses] = useState("");
  const router = useRouter();
  // const config = useAppConfig();

  const handleSuggestCourse = async () => {
    router.push("/user-page");
    // const userInfo = userInfoService.getUserInfo();
    // const userDoc = doc(db,'users',userInfo.uid);
    // const courseInfo = await getCoursesOverview(config);
    // if (courseInfo) {
    //   courseInfo.forEach(async course => {
    //     if (course.name === courses) {
    //       const courseId = course.id;
    //       if (courseId) {
    //         const result = await updateFavouriteCourseId(config, courseId);
    //         console.log(result);
    //         await updateDoc(userDoc, {
    //           displayName: name,
    //           favouriteCourseId: courseId
    //         });
    //         const new_user_info=userInfoService.getUserInfo();
    //         new_user_info["name"]=name;
    //         new_user_info["favouriteCourseId"]=courseId
    //         userInfoService.setUserInfo(JSON.stringify(new_user_info));
    //         window.location.replace(`/web`);
    //       }
    //     }
    //   });
    // }
  };

  const handleRender = (data: any) => {
    if (data === null) {
      return (
        <div className={styles["item3"]}>
          <Button
            color="primary"
            className="my-3"
            onClick={() => {
              const new_question_current = current_question + 1;
              setCurrentQuestion(new_question_current);
            }}
          >
            <strong>Continue</strong>
          </Button>
        </div>
      );
    } else {
      switch (data.type) {
        case "codeFillTheGap":
          return (
            <div className="flex gap-4 w-full items-center my-3">
              <div className="flex-1">
                <Input
                  color="secondary"
                  value={name}
                  placeholder="Type your first name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <p
                onClick={() => {
                  if (name !== "") {
                    const new_question_current = current_question + 1;
                    setCurrentQuestion(new_question_current);
                  }
                }}
              >
                <img
                  className={styles["img-style"]}
                  alt="send"
                  src="https://firebasestorage.googleapis.com/v0/b/codekids-480c0.appspot.com/o/shared-images%2FSend.png?alt=media&token=29656e47-e98a-48be-9885-8ac5ec139769"
                />
              </p>
            </div>
          );

        case "buttonChoose":
          return (
            <div className="my-4">
              <div className="flex flex-col gap-4 items-center">
                {data.items.map(
                  (item: any, index_item: React.Key | null | undefined) => {
                    return (
                      <Button
                        color="primary"
                        className="w-fit"
                        tabIndex={1}
                        onClick={() => {
                          const new_question_current = current_question + 1;
                          setCurrentQuestion(new_question_current);
                          console.log(item.content);
                        }}
                        key={index_item}
                      >
                        {item.content}
                      </Button>
                    );
                  },
                )}
              </div>
            </div>
          );

        case "buttonSelect":
          return (
            <div className="my-3">
              <div className="flex gap-4 items-center flex-wrap max-w-[400px] justify-center mx-auto">
                {data.items.map(
                  (item: any, index_item: React.Key | null | undefined) => {
                    return (
                      <Button
                        color="primary"
                        className="w-fit"
                        tabIndex={1}
                        onClick={() => {
                          const new_question_current = current_question + 1;
                          setCurrentQuestion(new_question_current);
                          if (data.type === "buttonSelect") {
                            setCourses((prevCourses) => {
                              const nextCourses = item.courses;
                              return nextCourses;
                            });
                          }
                          console.log(item.content);
                        }}
                        key={index_item}
                      >
                        {item.content}
                      </Button>
                    );
                  },
                )}
              </div>
            </div>
          );

        case "buttonDone":
          return (
            <div className="my-3">
              <div className="flex justify-center items-center">
                {data.items.map(
                  (item: any, index_item: React.Key | null | undefined) => {
                    return (
                      <Button
                        color="primary"
                        tabIndex={1}
                        onClick={() => {
                          handleSuggestCourse();
                        }}
                        key={index_item}
                      >
                        {item.content} {courses}
                      </Button>
                    );
                  },
                )}
              </div>
            </div>
          );

        default:
          return null;
      }
    }
  };

  return (
    <div>
      <div className={styles["suggest-courses"]}>
        <div className={styles["suggest-courses-question-div"]}>
          <div
            className={styles["grid-status"]}
            style={{ height: "10px", margin: "auto 0px" }}
          >
            <div className={styles["process-bar"]}>
              <div
                className={styles["process-track"]}
                style={{
                  width:
                    ((current_question + 1) * 100) /
                      data_suggest_courses.question.length +
                    "%",
                }}
              ></div>
            </div>
            <div></div>
          </div>

          <div style={{ margin: "auto 0px" }}>
            <div className={"col-12 row"}>
              <div className="flex justify-center items-center">
                <img
                  className={styles["img-style"]}
                  alt="robot"
                  src="https://firebasestorage.googleapis.com/v0/b/codekids-480c0.appspot.com/o/shared-images%2Frobot.png?alt=media&token=34d836e2-9014-4313-8c1e-72e27270e4eb"
                />
              </div>
              <div className="col-8">
                {data_suggest_courses.question.map((question, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        styles["question-content"] +
                        (index === current_question
                          ? " " + styles["current-open"]
                          : "")
                      }
                    >
                      <div className={styles["item2"]}>
                        {question.preInteractionModules.map(
                          (
                            preInteractionModule,
                            index_preInteractionModule,
                          ) => {
                            switch (preInteractionModule.type) {
                              case "paragraph":
                                return (
                                  <p
                                    key={index_preInteractionModule}
                                    className={styles["box-chat"]}
                                  >
                                    {preInteractionModule.content}
                                  </p>
                                );
                              case "image":
                                return (
                                  <img
                                    className={styles["img-style"]}
                                    key={index_preInteractionModule}
                                    alt=""
                                    src="https://firebasestorage.googleapis.com/v0/b/codekids-480c0.appspot.com/o/shared-images%2Fjavacode.png?alt=media&token=30506ba3-d27d-40ee-9a0a-c51ca321ee8f"
                                  />
                                );
                              default:
                                return null;
                            }
                          },
                        )}
                      </div>
                      {handleRender(question.interactionModule)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
