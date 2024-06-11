import eventEmitter, { EMIT_EVENT } from "./eventEmitter";

// Dictionary to track listeners per event type
const listeners = {};

/**
 * Add an event listener if it hasn't been added already.
 * @param {string} event - The event name.
 * @param {function} handler - The event handler function.
 */
export const addUniqueListener = (event, handler) => {
  if (!listeners[event]) {
    listeners[event] = new Set();
  }
  if (!listeners[event].has(handler)) {
    eventEmitter.addListener(event, handler);
    listeners[event].add(handler);
  }
};

/**
 * Remove an event listener.
 * @param {string} event - The event name.
 * @param {function} handler - The event handler function.
 */
export const removeUniqueListener = (event, handler) => {
  if (listeners[event] && listeners[event].has(handler)) {
    eventEmitter.removeListener(event, handler);
    listeners[event].delete(handler);
  }
};
