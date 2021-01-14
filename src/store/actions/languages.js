import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export function FetchLanguages() {
  return async (dispatch) => {
    const result = await api.get("/languages");

    dispatch({
      type: "languages/fetch",
      payload: result.data,
    });
  };
}
