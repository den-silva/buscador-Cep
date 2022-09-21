
function App() {
  return (
    <div className="App">
      <h1 className="title">Buscador CEP</h1>
      <div>
        <input
          type="text"
          placeholder="Digite seu CEP"
        />
        <button className="buttonSearch">
            Pesquisar 
        </button>
      </div>
      <main className="main">
        <h2>CEP: 12345-678</h2>
        
        <span>Rua Vista Alegre, 60</span>
        <span>Complemento: Bloco 2, Apto 71</span>
        <span>Demarchi</span>
        <span>São Bernardo do Campo - SP</span>

      </main>

    </div>
  );
}

export default App;
