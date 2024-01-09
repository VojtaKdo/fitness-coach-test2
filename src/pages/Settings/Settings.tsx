import { Link } from "react-router-dom"

export function Settings() {
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Nastavení</p>
        <p>Themes</p>
        <p>Language</p>
        <p>Toggle notification on or off</p>
        
        <Link to={"/aboutus"}>
            <p>About us</p>
        </Link>
        <Link to={"/policies"}>
            <p>Smluvní podmínky</p>
        </Link>
        <Link to={"/appreview"}>
            <p>App review</p>
        </Link>
        </>
    )
}