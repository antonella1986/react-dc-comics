export default function Header() {
    //tutto quello che c'è nelle parentesi tonde è JSX, nelle graffe è JS
    return (
        <header>

            <img className="logo" src="/img/dc-logo.png" alt="" srcset="" />
            <ul className="titles">
                <li><a href="http://">CHARACTERS</a></li>
                <li><a href="http://">COMICS</a></li>
                <li><a href="http://">MOVIES</a></li>
                <li><a href="http://">TV</a></li>
                <li><a href="http://">GAMES</a></li>
                <li><a href="http://">COLLECTIBLES</a></li>
                <li><a href="http://">VIDEOS</a></li>
                <li><a href="http://">FANS</a></li>
                <li><a href="http://">NEWS</a></li>
                <li><a href="http://">SHOP</a></li>
            </ul>

        </header>
    )
} 