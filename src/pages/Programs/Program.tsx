import { Link } from "react-router-dom"

export function Program(){
    return(
        <>
        <p>Cvičíme s Vojtou</p>
        <p>Kliky: 3x 12</p>
        <p>osu! maniak: 6 písniček v řade</p>
        <p>Jedno výherní lolečko - pro prohře další hra</p>
        <Link to={"/programs"}><p>Go back to programs</p></Link>
        <Link to={"/dashboard"}><p>Go back to dashboard</p></Link>
        </>
    )
}