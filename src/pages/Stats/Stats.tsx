import { Link } from "react-router-dom"

export function Stats(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Úspěchy</p>
        </>
    )
}