import { useEffect } from "react";
import { connect } from "react-redux";

import { FetchLanguages, deleteLanguage } from "./store/actions/languages";

/**
 * languages vem ali do mapStateToProps
 * fetchLanguages, deleteLanguage vem do mapActionsToProps
 */
function App({ languages, fetchLanguages, deleteLanguage }) {
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
              <button onClick={() => deleteLanguage(language.id)}>
                Delete Member
              </button>
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

export default connect(mapStateToProps, {
  fetchLanguages: FetchLanguages,
  deleteLanguage,
})(App);
