import { ButtonInactive, ButtonPrimary } from "../../components/buttons";
import { Header } from "../../components/header";
import { CardDiv, NoCardDiv } from "../../components/cardDivs";

import "./index.css"
import { InputForm } from "../../components/divForm";
import { useState } from "react";

export function HomePage (props) {
    const [cards, setCards] = useState([])
    const [total, setTotal] = useState(0)

    function removeCard (event) {
        const thisTarget = event.target.parentElement.parentElement.parentElement
        const thisType = thisTarget.children[0].firstChild.childNodes[1].innerText
        const thisAmount = thisTarget.children[0].lastChild.childNodes[0].innerText.substr(3)
        
        if (thisType === "Entrada") {
            setTotal(total - Number(thisAmount))
        } else {
            setTotal(total + Number(thisAmount))
        }
        thisTarget.remove()

        // setCards(
        //     (currentCards) => {
        //         currentCards.filter((card) => card.id)
        //     }
        // )
    }

    function filterCards (event) {
        
    }

    // function updateTotal () {        
    //     const profit = cards.filter((card) => card.type === "saida")
    //     const loss = cards.filter((card) => card.type === "entrada")
    //     console.log(profit)
    //     console.log(loss)
    //     console.log(cards)
    // }

    return (
        <div className="flex flex-col">
            <header>
                <Header onClick={props.onClick}/>
            </header>
            <main className="flex home-main">
                <section className="flex flex-col input-section">
                    <InputForm setCards={setCards} setTotal={setTotal}/>
                    {cards.length !== 0 ? (
                        <div className="flex flex-col inputs-div">
                            <div className="flex justify-between">
                                <p className="total-text">Valor total:</p>
                                <p className="total-amount">{`R$ ${total}`}</p>
                            </div>
                            <p className="amount-disclaimer">O valor se refere ao saldo</p>
                        </div>
                    ) : (
                        <></>
                    )}
                </section>
                <section className="output-section">
                    <div className="flex items-center justify-between info-header">
                        <h2 className="summary">Resumo financeiro</h2>
                        <div className="flex info-buttons">
                            <ButtonPrimary text="Todos" onClick={filterCards}/>
                            <ButtonInactive text="Entradas" onClick={filterCards}/>
                            <ButtonInactive text="Saídas" onClick={filterCards}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start info-main">
                        {cards.length === 0 ? (
                                <div className="flex flex-col info-none">
                                    <p className="no-info">Você ainda não possui nenhum lançamento</p>
                                    <NoCardDiv/>
                                    <NoCardDiv/>
                                    <NoCardDiv/>
                                </div>
                            ) : (
                                <div className="flex flex-col card-div">
                                    {
                                        cards.map((card, index) =>
                                            <CardDiv key={index} id={index} description={card.description} type={card.type} price={card.amount} onClick={removeCard}/>,
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}