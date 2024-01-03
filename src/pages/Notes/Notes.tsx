import { Link } from "react-router-dom"

export function Notes(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Poznámky</p>
        </>
    )
}