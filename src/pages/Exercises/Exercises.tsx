import { Link } from "react-router-dom"

export function Exercises(){
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <h2>Exercises</h2>
        <input type="text" placeholder="Vyhledat cviky"/>
        <button>Hledat cviky</button>
        <ul>
            <li>
                <p>Kliky</p>
                <p>Přejít</p>
            </li>
            <li>
                <p>Shyby</p>
                <p>Přejít</p>
            </li>
            <li>
                <p>Benchpress</p>
                <p>Přejít</p>
            </li>
        </ul>
        </>
    )
}