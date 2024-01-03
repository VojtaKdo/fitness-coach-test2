import { Link } from "react-router-dom"

export function Exercises(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Cviky</p>
        </>
    )
}