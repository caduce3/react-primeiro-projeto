import './Card.css'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.email}</h5>
            </div>
        </div>
    )
}

export default Colaborador