import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.participantes.length > 0) && <section className="time" style={css}>
            <h3 style={{ borderColor: props.corPrimario }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.participantes.map(participante => <Colaborador 
                    corDeFundo={props.corPrimario}
                    key={participante.nome}
                    nome={participante.nome}
                    imagem={participante.imagem}
                    email={participante.email}
                />)}
            </div>
        </section>
    )
}

export default Time