import { Link } from "react-router-dom";

export function Friend(){
    return(
        <>
        <p>Friend</p>
        <p>Profilovka</p>
        <p>Jméno</p>
        <p>Banner</p>
        <p>Status</p>
        <p>Status - kratke slovo - info</p>
        <p>bio</p>
        <p>seznam přátel</p>

        <Link to={"/friends"}><p>Go back to friendlist</p></Link>
        <Link to={"/dashboard"}><p>Go back to dashboard</p></Link>
        </>
    )
}