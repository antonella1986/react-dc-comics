export default function Card({ image, title }) {

    return(
        <div className="container-cards">
            <div className="rowCards">
                <div className="cards">
                    <img src={image} alt={title} className="comic-card-image" />
                    <p className="comic-card-title">{title.toUpperCase()}</p>
                </div>
            </div>
        </div>
    )
}