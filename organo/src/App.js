import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Grupo Alpha',
      corPrimario: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Fênix',
      corPrimario: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Tech Ninjas',
      corPrimario: '#A6D157',
      corSecundaria: '#F0F8E3'
    },
    {
      nome: 'Team Progamer',
      corPrimario: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'NASA',
      corPrimario: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Digital Divas',
      corPrimario: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Submarine',
      corPrimario: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [participantes, setParticipante] = useState([])

  const aoNovoParticipanteAdicionado = (participante) => {
    setParticipante([...participantes, participante]) //Criando array novo, pegando participantes antigos e adicionando o novo no final
  }

  return (

    <div className="App">
      <Banner />
      <Formulario aoParticipanteCadastrado={participante => aoNovoParticipanteAdicionado(participante)} />
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimario={time.corPrimario} corSecundaria={time.corSecundaria} />)} 

    </div>
  );
}

export default App;
