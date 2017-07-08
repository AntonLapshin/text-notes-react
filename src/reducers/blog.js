export default (state = {}, action) => {
  switch (action.type) {
    case "SELECT_POST":
      return {
        ...state,
        selectedId: action.id
      };
    // return {
    //   ...state,
    //   settings: {
    //     ...state.settings,
    //     selectedDateRange: action.dateRange
    //   },
    //   widgets: state.widgets.map((w, i) => {
    //     return {
    //       ...w,
    //       data: action.widgets[i].data
    //     };
    //   })
    // };

    default:
      return state;
  }
};
