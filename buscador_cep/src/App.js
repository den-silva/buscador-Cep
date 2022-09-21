import { FiSearch} from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className='containerInput' id='cep'>
        <input
          
          type="text"
          placeholder="Digite seu CEP aqui..."
        />
        <button className="buttonSearch">
            Pesquisar &nbsp;
            <FiSearch size={15} color="#fff"/> 
        </button>
      </div>
      <main className="main">
        <h2>CEP: 12345-678</h2>

        <span>Rua Vista Alegre, 60</span>
        <span>Complemento: Bloco 2, Apto 71</span>
        <span>Bairro: Demarchi</span>
        <span>Cidade: São Bernardo do Campo - SP</span>

      </main>
      
    </div>
    
    
  );
}

export default App;
