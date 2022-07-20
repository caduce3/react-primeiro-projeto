import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div> //onChange = toda vida que digitar algo, eu quero executar uma função
        //value = valor que está no input
    )
}

export default CampoTexto