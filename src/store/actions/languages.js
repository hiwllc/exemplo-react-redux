export function FetchLanguages() {
  return (dispatch) => {
    dispatch({
      type: "languages/fetch",
      payload: [{ id: 1, name: "Bananas" }],
    });
  };
}
