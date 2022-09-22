import { useState } from 'react'
import { FiSearch} from 'react-icons/fi'
import './styles.css'
import api from './services/api'

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({ })
  
  async function handleSearch(){
    if(input === ''){
      alert('Preencha o campo de CEP')
      return
    }
    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')

    }
    catch{
      alert('Não foi possível consultar o Cep')
      setInput('')
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

      {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span> {cep.logradouro} </span>
        <span>Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Cidade: {cep.localidade} - {cep.uf}</span>

      </main>
      )}
      
      
    </div>
    
    
  );
}

export default App;
