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
    
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados e monte seu time para participar do hackathon UERN Natal.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="E-mail" placeholder="Digite seu período atual" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario