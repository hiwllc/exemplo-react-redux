import { useEffect } from "react";
import { connect } from "react-redux";

import { FetchLanguages } from "./store/actions/languages";

/**
 * languages vem ali do mapStateToProps
 * fetchLanguages vem do mapActionsToProps
 */
function App({ languages, fetchLanguages }) {
  /** isso aqui é equivalente ao componentDidMount, não é o mesmo conceito mas é similar. */
  useEffect(() => {
    fetchLanguages();
  }, []);

  return (
    <>
      <div>
        <input name="cadastra uma lang nova aqui" />
        <button>adicionar</button>
      </div>

      <hr />
      <h3>Linguagems</h3>
      {languages.length <= 0 && <span>Opa não tem nada ainda :(</span>}

      <ul>
        {languages.map((language) => (
          <li key={language.id}>
            <div>
              <h3>{language.name}</h3>
              <button>Delete Member</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = ({ languages }) => ({
  /**
   * Aqui nós mapeamos o languages que vem lá do nosso reducer, inicialmente será um array vazio.
   */
  languages,
});

/**
 * Aqui nós mapeamos nossos actions então a função fetchLanguages vai ficar disponivel em props tambem.
 */
const mapDispatchToProps = (dispatch) => ({
  fetchLanguages: () =>
    dispatch({ type: "languages/fetch", payload: FetchLanguages() }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
