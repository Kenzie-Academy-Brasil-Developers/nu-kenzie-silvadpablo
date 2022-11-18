import { ButtonLogOut } from "../buttons"
import { NuKenzieLogo } from "../nuKenzie"
import "./index.css"

export function Header (props) {
    return (
        <div>
            <header className="flex justify-between items-center header">
                <NuKenzieLogo />
                <div>
                    <ButtonLogOut text="Início" onClick={props.onClick}/>
                </div>
            </header>
        </div>
    )
}