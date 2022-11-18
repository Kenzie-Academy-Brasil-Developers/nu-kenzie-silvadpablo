import { ButtonFilter, ButtonInactive, ButtonPrimary } from "../../components/buttons";
import { Header } from "../../components/header";
import { CardDiv, NoCardDiv } from "../../components/cardDivs";

import "./index.css"
import { InputForm } from "../../components/divForm";
import { useState } from "react";

export function HomePage (props) {
    const [cards, setCards] = useState([])
    const [total, setTotal] = useState(0)
    const [filter, setFilter] = useState("todos")
    const [cardId, setCardId] = useState(0)

    let arrayCards = []
    if (filter === "todos") {
        arrayCards = [...cards]
    } else if (filter === "entrada") {
        arrayCards = cards.filter((card) => card.type === filter)
    } else if(filter === "saida") {
        arrayCards = cards.filter((card) => card.type === filter)
    }

    function removeCard (event) {
        const thisTarget = event.target.parentElement.parentElement.parentElement
        const thisType = thisTarget.children[0].firstChild.childNodes[1].innerText
        const thisAmount = thisTarget.children[0].lastChild.childNodes[0].innerText.substr(3)
        
        if (thisType === "Entrada") {
            setTotal(total - Number(thisAmount))
        } else {
            setTotal(total + Number(thisAmount))
        }
        // let remainingCards = cards.filter((card) => card.cardId !== thisTarget.id)
        // setCards(remainingCards)
        // console.log(cards)
        thisTarget.remove()
    }

    function filterCards (event) {
        setFilter(event.target.value)
    }

    return (
        <div className="flex flex-col">
            <header>
                <Header onClick={props.onClick}/>
            </header>
            <main className="flex home-main">
                <section className="flex flex-col input-section">
                    <InputForm setCards={setCards} setTotal={setTotal} setCardId={setCardId} cardId={cardId}/>
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
                            <ButtonFilter class="btn" text="Todos" value="todos" onClick={filterCards}/>
                            <ButtonFilter class="btn btn-inactive" text="Entradas" value="entrada" onClick={filterCards}/>
                            <ButtonFilter class="btn btn-inactive" text="Saídas" value="saida" onClick={filterCards}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start info-main">
                        {arrayCards.length === 0 ? (
                                <div className="flex flex-col info-none">
                                    <p className="no-info">Você ainda não possui nenhum lançamento</p>
                                    <NoCardDiv/>
                                    <NoCardDiv/>
                                    <NoCardDiv/>
                                </div>
                            ) : (
                                <div className="flex flex-col card-div">
                                    {
                                        arrayCards.map((card, index) =>
                                            <CardDiv key={index} id={index} description={card.description} type={card.type} price={card.amount} onClick={removeCard}/>
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