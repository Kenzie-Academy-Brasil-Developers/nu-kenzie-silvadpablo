import { useState } from "react"
import "./index.css"

export function TextInput (props) {
    return (
        <div className="flex flex-col items-start input-desc-div">
            <label className="desc-label" htmlFor={props.id}>{props.innerText}</label>
            <input required className="desc-input" type="text" name={props.id} id={props.id} placeholder={props.holder}
            onChange={props.onChange}/>
        </div>
    )
}

export function AmountInput (props) {
    return (
        <div className="flex flex-col items-start input-desc-div">
            <label className="desc-label" htmlFor={props.id}>{props.innerText}</label>
            <input required className="desc-input amount-input" type="text" name={props.id} id={props.id} placeholder={props.holder}
            onKeyPress={props.onKeyPress}/>
            <div className="currency"></div>
        </div>
    )
}

export function TypeSelect (props) {
    const [selectedOption, setSelectedOption] = useState("entrada")
    return (
        <div className="flex flex-col items-start input-desc-div type-select">
            <label className="desc-label" htmlFor="type">Tipo do valor</label>
            <select required className="desc-input" name="type" id="type" onChange={props.onChange} defaultValue={selectedOption}>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </select>
        </div>
    )
}

// function checkInput () {
//     const format = /[\d.]/
//     if (format.test(event.key) == false && event.keyCode != 8 && event.target.value !== undefined) {
//         event.target.value = event.target.value.slice(0, -1)
//     }
//     return insertedValue = event.target.value
// }