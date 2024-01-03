import { Link } from "react-router-dom"

export function Timetable(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Rozvrh</p>
        </>
    )
}