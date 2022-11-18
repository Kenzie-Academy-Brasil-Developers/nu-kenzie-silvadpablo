import { ButtonLogIn } from "../../components/buttons";
import { NuKenzieLogo } from "../../components/nuKenzie";
import illustration from "../../imgs/illustration.png"

import "./index.css"


export function IndexPage (props) {
    return (
        <div className="flex justify-center items-center index-page">
            <div className="flex flex-col items-start pageInfo">
                <NuKenzieLogo />
                <h1>Centralize o controle das suas finanças</h1>
                <p className="text">de forma rápida e segura</p>
                <div className="button-div">
                    <ButtonLogIn text="Iniciar" onClick={props.onClick}/>
                </div>
            </div>
            <div className="index-img">
                <img src={illustration} alt="logo" />
            </div>
        </div>
    )
}