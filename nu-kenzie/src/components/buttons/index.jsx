import "./index.css"

export function ButtonPrimary (props) {
    return (
        <button className="btn" onClick={props.onClick}>{props.text}</button>
        )
    }
    
export function ButtonLogIn (props) {
        return (
            <button className="btn" onClick={props.onClick}>{props.text}</button>
        )
}

export function ButtonLogOut (props) {
        return (
            <button className="btn btn-inactive" onClick={props.onClick}>{props.text}</button>
        )
}

export function ButtonInactive (props) {
    return (
        <button className="btn btn-inactive" onClick={props.onClick}>{props.text}</button>
    )
}