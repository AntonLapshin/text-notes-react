export default (state = {}, action) => {
  switch (action.type) {
    case "NOTE_CREATE":
      return {
        ...state,
        active: action.note.id,
        items: [...state.items, action.note]
      };

    case "NOTE_REMOVE":
      return {
        ...state,
        active: -1,
        items: state.items.filter(i => i.id !== action.id)
      };

    case "NOTE_ACTIVATE":
      return {
        ...state,
        active: action.id
      };

    case "NOTE_DEACTIVATE":
      return {
        ...state,
        active: -1
      };

    case "NOTE_APPEND_RECORD":
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === +action.id) {
            return {
              ...item,
              records: [
                ...item.records,
                {
                  date: new Date(),
                  text: action.text
                }
              ]
            };
          } else {
            return item;
          }
        })
      };

    default:
      return state;
  }
};
