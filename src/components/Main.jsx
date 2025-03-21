import ComicsList from './ComicsList'

export default function Main() {
    //tutto quello che c'è nelle parentesi tonde è JSX, nelle graffe è JS
    return (
        <main className="text-center">
            <div className="container-jumbotron"></div>
            <ComicsList />
        </main>
    )
}