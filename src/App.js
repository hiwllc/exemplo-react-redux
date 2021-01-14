import { connect } from "react-redux";

/**
 * esse languages vem ali do mapStateToProps
 */
function App({ languages }) {
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

export default connect(mapStateToProps)(App);
