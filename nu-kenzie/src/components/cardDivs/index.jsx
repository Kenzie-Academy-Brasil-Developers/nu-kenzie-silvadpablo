import "./index.css"

export function NoCardDiv () {
    return (
        <div className="flex justify-end whole-div">
            <div className="flex flex-col justify-center bottom-div">
                <div className="line top"></div>
                <div className="line bottom"></div>
            </div>
        </div>
    )
}

export function CardDiv (props) {

    if (props.type === "saida") {
        return (
            <div className="flex justify-end whole-div" id={props.id}>
                <div className="flex justify-between bottom-div">
                    <Card description={props.description} type="Saída" price={`R$ ${props.price}`} onClick={props.onClick}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex justify-end whole-div green-line" id={props.id}>
                <div className="flex justify-between bottom-div">
                    <Card description={props.description} type="Entrada" price={`R$ ${props.price}`} onClick={props.onClick}/>
                </div>
            </div>
        )
    }

}

function Card (props) {
    return (
        <>
            <div className="flex flex-col items-start justify-around div-left">
                <p className="item-description">{props.description}</p>
                <p className="item-type">{props.type}</p>
            </div>
            <div className="flex items-center div-right">
                <p className="item-price">{props.price}</p>
                <div className="card-remove" onClick={props.onClick}></div>
            </div>
        </>
    )
}