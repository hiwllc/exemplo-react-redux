export function languagesReducer(state = [], action) {
  switch (action.type) {
    case "languages/fetch":
      console.log(action.payload);

      return action.payload;
    default:
      return state;
  }
}
