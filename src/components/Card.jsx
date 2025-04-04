export default function Card({ image, title }) {

    return(
        <div className="cardsCard">
            <img src={image} alt={title} className="comic-card-image" />
            <p className="comic-card-title">{title.toUpperCase()}</p>
        </div>

    )
}