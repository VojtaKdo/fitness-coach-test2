import { Link } from "react-router-dom"

export function Settings() {
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Nastavení</p>
        </>
    )
}