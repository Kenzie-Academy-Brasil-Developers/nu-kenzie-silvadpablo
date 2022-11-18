import { useState } from "react"
import { ButtonPrimary } from "../buttons"
import { AmountInput, TextInput, TypeSelect } from "../inputs"
import "./index.css"


export function InputForm ({setCards, setTotal}) {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("0")
    const [type, setType] = useState("entrada")

    function setInputDescription (event) {
        setDescription(event.target.value)
    }
    function setInputAmount (event) {
        const format = /[\d.]/
        if (format.test(event.key) === false && event.keyCode !== 8 && event.target.value !== undefined) {
            event.preventDefault()
        }
        setAmount(event.target.value)
    }
    function setInputType (event) {
        setType(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        const card = {
            description,
            amount,
            type,
        }
        console.log(card)
        setCards((currentCards) => [...currentCards, card])
        
        if (type === "entrada") {
            setTotal((currentTotal) => currentTotal + Number(amount))
        } else {
            setTotal((currentTotal) => currentTotal - Number(amount))
        }
        // updateTotal()
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col inputs-div">
            <div className="flex flex-col items-start description-div">
                <TextInput id="description" innerText="Descrição" holder="Digite aqui sua descrição"
                onChange={setInputDescription}/>
                <p className="example">Ex.: Compra de roupas</p>
            </div>
            <div className="flex purchase-input">
                <div className="div-amount">
                    <AmountInput id="amount" innerText="Valor" holder="00,00"
                    onKeyPress={setInputAmount}/>
                </div>
                <div className="div-select">
                    <TypeSelect onChange={setInputType}/>
                </div>
            </div>
            <ButtonPrimary text="Inserir Valor"/>
        </form>
    )
}