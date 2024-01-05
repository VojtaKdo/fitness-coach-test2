import { Link } from "react-router-dom"

export function Policies(){
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Smluvní podmínky, GDPR</p>
        </>
    )
}