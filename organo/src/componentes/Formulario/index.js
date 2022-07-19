import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {
    
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

    const aoSalvar = (evento) => {
        evento.preventDefault() //não siga o comportamento padrão
        console.log("Foi submetido")
    }
    
    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados e monte seu time para participar do hackathon UERN Natal.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="E-mail" placeholder="Digite seu período atual" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario