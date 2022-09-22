import { useState } from 'react'
import { FiSearch} from 'react-icons/fi'
import './styles.css'
import api from './services/api.js'

function App() {
  const [input, setInput] = useState(' ');
  async function handleSearch(){
    if(input === ''){
      alert('Preencha o campo de CEP')
      return
    }
    try{
      const response = await api.get(`${input}/json`)
      console.log(response)
    }
    catch{

    }
  }
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className='containerInput' id='cep'>
        <input
          
          type="text"
          placeholder="Digite seu CEP aqui..."
          value={input}
          onChange = {(evento)=> setInput(evento.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
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
