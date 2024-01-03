import { Link } from "react-router-dom"

export function Settings() {
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se Zpět</p>
        </Link>
        <p>Nastavení</p>
        </>
    )
}