export default function Footer() {
    //tutto quello che c'è nelle parentesi tonde è JSX, nelle graffe è JS
    return (
        <footer>
            <section className="footer-up">
                content here
            </section>
            <section className="footer-middle">
                content here
            </section>
            <section className="footer-bottom">
                <button className="btn">SIGN-UP NOW!</button>
                <h3>FOLLOW US</h3>
                <img src="/img/footer-facebook.png" alt="" srcset="" />
                <img src="/img/footer-twitter.png" alt="" srcset="" />
                <img src="/img/footer-youtube.png" alt="" srcset="" />
                <img src="/img/footer-pinterest.png" alt="" srcset="" />
                <img src="/img/footer-periscope.png" alt="" srcset="" />
            </section>
        </footer>
    )
}