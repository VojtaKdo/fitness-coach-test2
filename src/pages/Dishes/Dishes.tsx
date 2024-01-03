import { Link } from "react-router-dom"

export function Dishes(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Jídelníček</p>
        </>
    )
}