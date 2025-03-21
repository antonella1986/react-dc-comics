export default function Card({ image, title }) {

    return(
        <div className="containerCards">
            <div className="rowCards">
                <div className="card">
                    <img src={image} alt={title} className="comic-card-image" />
                    <p className="comic-card-title">{title}</p>
                </div>
            </div>
        </div>
    )
}