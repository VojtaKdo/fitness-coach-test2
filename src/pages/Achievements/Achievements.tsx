import { Link } from "react-router-dom"

export function Achievements(){
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <p>Úspěchy</p>
        <button>Search</button>
        <h2>Beginner</h2>
        <ul>
            <li>
                <p>Beginner: First session!</p>
                <p>Description</p>
                <p>Status: unlocked</p>
            </li>
        </ul>
        <h2>Intermidiate</h2>
        <ul>
            <li>
                <p>Intermidiate: 50kg deadlift</p>
                <p>Description</p>
                <p>Status: Locked</p>
            </li>
        </ul>
        <h2>Extreme</h2>
        <ul>
        <li>
                <p>Extreme: Champion of pull-ups</p>
                <p>Description</p>
                <p>Status: Locked</p>
            </li>
        </ul>
        <Link to={"/"}><p>Go back to dashboard</p></Link>
        </>
    )
}