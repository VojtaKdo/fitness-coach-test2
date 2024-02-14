import { Link } from "react-router-dom"

export function Dishes(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Go back to dashboard</p>
        </Link>
        <h2>Jídelníček</h2>
        <p>filtr</p>
        <ul>
            <Link to={"/dish"}>
            <li>
                <p>Obrazek</p>
                <p>Jméno jídla</p>
                <p>Přejít</p>
            </li>
            </Link>
            <li>
                <p>Obrazek</p>
                <p>Jméno jídla</p>
                <p>Přejít</p>
            </li>
            <li>
                <p>Obrazek</p>
                <p>Jméno jídla</p>
                <p>Přejít</p>
            </li>
        </ul>
        </>
    )
}