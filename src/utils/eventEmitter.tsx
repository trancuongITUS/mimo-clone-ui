import { EventEmitter } from "events";

export const EMIT_EVENT = {
  SUBMIT_ANSWER: "SUBMIT_ANSWER",
  SHOW_ANSWER_GUIDE: "SHOW_ANSWER_GUIDE",
  CREATE_LESSON: "CREATE_LESSON",
};

const eventEmitter = new EventEmitter();

export default eventEmitter;
