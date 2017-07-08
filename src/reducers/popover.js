export default (state = {}, action) => {
  switch (action.type) {
    case "SELECTION_CHANGE":
      return {
        ...state,
        coords: action.coords || state.coords,
        visible: action.visible
      };

    default:
      return state;
  }
};
