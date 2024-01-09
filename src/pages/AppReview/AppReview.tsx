import { Link } from "react-router-dom"

export function AppReview(){
    return(
        <>
        <Link to={"/settings"}>
            <p>Go back</p>
        </Link>
        <p>Je to fakt skvělá aplikace a Till je pes 🐕‍🦺</p>
        </>
    )
}