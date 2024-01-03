import { Link } from "react-router-dom"

export function Policies(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Smluvní podmínky, GDPR</p>
        </>
    )
}