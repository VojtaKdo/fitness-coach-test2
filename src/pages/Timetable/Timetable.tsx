import { Link } from "react-router-dom"

export function Timetable(){
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Rozvrh</p>
        <p>Rozvrh bude pro každý týden stejný, budeme vkládat hodiny podobně jako ve škole</p>
        </>
    )
}