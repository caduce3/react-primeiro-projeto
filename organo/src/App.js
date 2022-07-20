import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';

function App() {

  const [participante, setParticipante] = useState([])

  const aoNovoParticipanteAdicionado = (participante) => {
    setParticipante([...participante, participante]) //Criando array novo, pegando participantes antigos e adicionando o novo no final
  }

  return (

    <div className="App">
      <Banner />
      <Formulario aoParticipanteCadastrado={participante => aoNovoParticipanteAdicionado(participante)} />
    </div>
  );
}

export default App;
