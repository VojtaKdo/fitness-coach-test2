import { Link } from "react-router-dom"

export function Notes(){
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Poznámky</p>
        </>
    )
}