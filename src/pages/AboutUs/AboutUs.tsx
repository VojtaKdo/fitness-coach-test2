import { Link } from "react-router-dom"

export function AboutUs(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Jsme Fitness Coach</p>
        </>
    )
}