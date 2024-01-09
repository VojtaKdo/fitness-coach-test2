import { Link } from "react-router-dom"

export function AboutUs(){
    return(
        <>
        <Link to={"/settings"}>
            <p>Go back</p>
        </Link>
        <p>Jsme Fitness Coach</p>
        </>
    )
}