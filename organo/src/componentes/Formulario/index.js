import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'


const Formulario = (props) => {

    const times = [
        'Grupo Alpha',
        'Fênix',
        'Tech Ninjas',
        'Team Progammer',
        'NASA',
        'Digital Divas',
        'Submarine',
        'The Warrios',
        'Alcateia',
        'Grupo Ômega'
    ]

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault() //não siga o comportamento padrão
        props.aoParticipanteCadastrado({
            nome,
            email,
            imagem,
            time
        })
    }

    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados e monte seu time para participar do hackathon UERN Natal.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} //set da img com o valor recebido
                />
                <CampoTexto
                    obrigatorio={true}
                    label="E-mail"
                    placeholder="Digite seu período atual"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario