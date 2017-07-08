export const selectPost = id => {
  return { type: "SELECT_POST", id };
};

export const selectionChange = coords => {
  return { type: "SELECTION_CHANGE", coords, visible: coords !== null };
};
