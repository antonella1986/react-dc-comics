export default function Footer() {
    //tutto quello che c'è nelle parentesi tonde è JSX, nelle graffe è JS
    return (
        <footer>
            <section className="footer-up">
                <ul className="ul-up">
                    <li><img className="middle-img" src="/img/buy-comics-digital-comics.png" alt="" srcset="" /> DIGITAL COMICS</li>
                    <li><img className="middle-img" src="/img/buy-comics-merchandise.png" alt="" srcset="" /> DC MERCHANDISE</li>
                    <li><img className="middle-img" src="/img/buy-comics-subscriptions.png" alt="" srcset="" /> SUBSCRIPTION</li>
                    <li><img className="middle-img" src="/img/buy-comics-shop-locator.png" alt="" srcset="" /> COMIC SHOP LOCATOR</li>
                    <li><img className="middle-img" src="/img/buy-dc-power-visa.svg" alt="" srcset="" /> DC POWER VISA</li>
                </ul>
            </section>

            <section className="footer-middle">
                <div className="first-col">
                    <ul>
                        <li><h3>DC COMICS</h3></li>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li>News</li>
                    </ul>
                    <ul>
                        <li><h3>SHOP</h3></li>
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>
                    </ul>
                </div>
                <img className="logo-bg" src="/img/dc-logo-bg.png" alt="" srcset="" />
                <div className="second-col">
                    <ul>
                        <li><h3>DC</h3></li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy (New)</li>
                        <li>Ad Choises</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                        <li>Subscriptions</li>
                        <li>Talent Workshops</li>
                        <li>CPSC Certificates</li>
                        <li>Ratings</li>
                        <li>Shop Help</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="third-col">
                    <ul>
                        <li><h3>SITES</h3></li>
                        <li>DC</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>DC Universe</li>
                        <li>DC Power Visa</li>
                    </ul>
                </div>
            </section>

            <section className="footer-bottom">
                <div className="btn-section">
                    <button className="btn">SIGN-UP NOW!</button>
                </div>
                <div className="social-section">
                    <h3>FOLLOW US</h3>
                    <img src="/img/footer-facebook.png" alt="" srcset="" />
                    <img src="/img/footer-twitter.png" alt="" srcset="" />
                    <img src="/img/footer-youtube.png" alt="" srcset="" />
                    <img src="/img/footer-pinterest.png" alt="" srcset="" />
                    <img src="/img/footer-periscope.png" alt="" srcset="" />
                </div>
            </section>
        </footer>
    )
}