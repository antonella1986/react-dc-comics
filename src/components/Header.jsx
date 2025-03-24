export default function Header({ links }) {
    //tutto quello che c'è nelle parentesi tonde è JSX, nelle graffe è JS
    return (
        <header>

            <a href="https://www.dc.com/" target="_blank" rel="noopener noreferrer"><img className="logo" src="/img/dc-logo.png" alt="logo DC Comics" /></a>
            <ul className="titles">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>

        </header>
    )
} 