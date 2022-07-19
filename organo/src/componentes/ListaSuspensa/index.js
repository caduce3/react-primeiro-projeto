import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>  //para cada item que recebo, retorno uma option
                })} 
            </select>
        </div>
    )
}

export default ListaSuspensa