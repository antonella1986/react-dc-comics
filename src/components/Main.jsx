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
                <a href="https://www.qualitycomix.com/learn/dc-comics-facts-you-never-knew" target="_blank" rel="noopener noreferrer"><button className="load-btn">LOAD MORE</button></a>
            </div>
        </main>
    )
}