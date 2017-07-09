import { generate, activate, deactivate, remove } from "../helpers/note";

export const selectPost = id => {
  return { type: "SELECT_POST", id };
};

export const selectionChange = coords => {
  return { type: "SELECTION_CHANGE", coords, visible: coords !== null };
};

export const noteCreate = items => {
  return { type: "NOTE_CREATE", note: generate(items) };
};

export const noteRemove = id => {
  remove(id);
  return { type: "NOTE_REMOVE", id };
};

export const noteActivate = el => {
  const id = activate(el);
  return { type: "NOTE_ACTIVATE", id };
};

export const noteDeactivate = () => {
  deactivate();
  return { type: "NOTE_DEACTIVATE" };
};

export const noteAppendRecord = (id, text) => {
  return { type: "NOTE_APPEND_RECORD", id, text };
};

