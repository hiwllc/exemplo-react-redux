export function languagesReducer(state = [], action) {
  switch (action.type) {
    case action.FETCH_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
}
