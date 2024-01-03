import { Link } from "react-router-dom"

export function Friends(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Přátelé</p>
        </>
    )
}