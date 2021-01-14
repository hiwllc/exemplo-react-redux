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

export function deleteLanguage(id) {
  return async (dispatch) => {
    /**
     * Aqui entra o método DELETE
     */
    await api.delete(`/languages/${id}`);

    /**
     * Aqui refazemos os dados pra pegar a lista de linguagems atualizadas.
     * em uma aplicação no mundo real, isso não seria o ideal.
     */
    const result = await api.get("/languages");

    dispatch({
      type: "languages/delete",
      payload: result.data,
    });
  };
}
