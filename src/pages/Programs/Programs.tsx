import { Link } from "react-router-dom"

export function Programs(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Programy</p>
        </>
    )
}