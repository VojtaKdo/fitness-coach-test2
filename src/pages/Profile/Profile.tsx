import { Link } from "react-router-dom"

export function Profile(){
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Profil</p>
        <p>Jméno</p>
        <p>Badge</p>
        <p>Stats</p>
        <p>Profilovka</p>
        <p>Banner</p>
        <p>Status - text</p>
        <p>Status - online/cvici/atd.</p>
        <p>Bio</p>
        <Link to={"/friends"}>
        <p>Proklik na přátelé</p>
        </Link>
        <p>Makro kalkulačka</p>
        </>
    )
}