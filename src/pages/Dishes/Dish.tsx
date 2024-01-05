import { Link } from "react-router-dom"

export function Dish(){
    return(
        <>
        <h2>Jméno jídla</h2>
        <p>Obrazek</p>
        <p>Tabulka - hodnoty</p>
        <p>Upvote</p>
        <p>Downvote</p>
        <Link to={"/dishes"}>
            <p>Go back to dishes</p>
        </Link>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        </>
    )
}