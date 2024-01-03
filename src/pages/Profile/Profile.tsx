import { Link } from "react-router-dom"

export function Profile(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Profil</p>
        </>
    )
}