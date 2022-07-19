import './CampoTexto.css'

const CampoTexto = (props) => {
    
   let valor = ''
    
    const aoDigitar = (evento) => {
        valor = evento.target.value //guardando a referencia numa variável
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value ={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto