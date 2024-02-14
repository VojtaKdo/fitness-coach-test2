import { Link } from "react-router-dom"

export function Notes(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Poznámky</p>
        <p>Podobně jako notion, data budeme ukládat do souboru</p>
        </>
    )
}