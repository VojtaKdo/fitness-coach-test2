import { Link } from "react-router-dom"

export function Notifications(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Upozornění</p>
        </>
    )
}