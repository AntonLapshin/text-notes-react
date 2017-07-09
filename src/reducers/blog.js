export default (state = {}, action) => {
  switch (action.type) {
    case "SELECT_POST":
      return {
        ...state,
        selectedId: action.id
      };

    default:
      return state;
  }
};
