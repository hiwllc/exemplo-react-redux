export function languagesReducer(state = [], action) {
  switch (action.type) {
    case "languages/fetch":
      return action.payload;
    case "languages/delete":
      return action.payload;
    default:
      return state;
  }
}
