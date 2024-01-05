import { Link } from "react-router-dom"

export function Profile(){
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Profil</p>
        </>
    )
}