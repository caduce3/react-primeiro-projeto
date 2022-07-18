import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = () => {
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados e monte seu time para participar do hackathon UERN Natal.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Período" placeholder="Digite seu período atual" />
                <CampoTexto label="Linguagem" placeholder="Digite sua linguagem favorita" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario