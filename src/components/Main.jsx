import ComicsList from './ComicsList'

export default function Main() {
    //tutto quello che c'è nelle parentesi tonde è JSX, nelle graffe è JS
    return (
        <main>
            <div className="container-jumbotron"></div>
            <div className="container-cards">
                <ComicsList />
            </div>
            <div>
                <button className="load">LOAD MORE</button>
            </div>
        </main>
    )
}