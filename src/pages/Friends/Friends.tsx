import { Link } from "react-router-dom"

export function Friends(){
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Přátelé</p>
        <input type="text" placeholder="Hledat přítele"/>
        <button>Vyhledat</button>
        <ul>
            <li>
                <p>Icon</p>
                <p>Petr Pavel</p>
                <Link to={"/friend"}>
                <p style={{}}>Přejít</p>
                </Link>
            </li>
            <li>
                <p>Icon</p>
                <p>Honza Tillů</p>
                <p style={{}}>Přejít</p>
            </li>
        </ul>
        </>
    )
}