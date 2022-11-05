import './style.css';

export default function ItemLista(props) {
    return (
        <div className='box-signo'>
            <div className='signo-nome'>
                {props.signo}
            </div>

            <img src={props.imagem} alt={props.signo} title={props.signo} />

            <div className='signo-data'>
                {props.dataInicio} - {props.dataFim}
            </div>
        </div>
    )
}