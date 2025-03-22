import ComicsList from './ComicsList'

export default function Main() {
    //tutto quello che c'è nelle parentesi tonde è JSX, nelle graffe è JS
    return (
        <main>
            <div className="container-jumbotron"></div>
            <div>
                <button className='series-btn'>CURRENT SERIES</button>
            </div>
            <div className="container-cards">
                <ComicsList />
            </div>
            <div>
                <button className="load-btn">LOAD MORE</button>
            </div>
        </main>
    )
}