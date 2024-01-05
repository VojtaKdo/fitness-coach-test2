import { Link } from "react-router-dom"

export function Programs(){
    return(
        <>
        <Link to={"/"}>
            <p>Go back to dashboard</p>
        </Link>
        <h2>Beginner | Intermidiate | Hard</h2>
        <h3>Programs</h3>
            <p>Beginner</p>
            <p>Intermidiate</p>
            <p>Hard</p>
            <h2>Proklik</h2>
            <h3>Beginner</h3>
            <ul>
                <Link to={"/program"}>
                <li><p>Cvičíme s Vojtou</p></li>
                </Link>
                <li><p>Upvotu: 247294</p></li>
                <li><p>Downvotu: 0</p></li>
                <li><p>Cvičíme s Vojtou</p></li>
                <li><p>Upvotu: 247294</p></li>
                <li><p>Downvotu: 0</p></li>
                <li><p>Cvičíme s Vojtou</p></li>
                <li><p>Upvotu: 247294</p></li>
                <li><p>Downvotu: 0</p></li>
            </ul>
        </>
    )
}