import "../style/home.css"

import Menu from "./Menu";
import Product from "./product";

function Home() {
    return (
        <>
            <Menu />
            <section className="hero">
                <div className="first-img">
                    <img src="./assets/images/Konica.jpg" alt="medical" />
                </div>
                <div className="sec-img">
                </div>
            </section>

            <section className="val-sec">
                <div>
                    <h1>*</h1>
                    <h2 className="foc-band">free delivery</h2>
                    <p className="foc-short">For all orders over 1000Rs.</p>
                </div>
                <div>
                    <h1>*</h1>
                    <h2 className="foc-band">90 Days Return</h2>
                    <p className="foc-short">If goods have problems</p>
                </div>
                <div>
                    <h1>*</h1>
                    <h2 className="foc-band">Secure Payment</h2>
                    <p className="foc-short">100% secure payment</p>
                </div>
                <div>
                    <h1>*</h1>
                    <h2 className="foc-band">24/7 Support</h2>
                    <p className="foc-short">Dedicated support</p>
                </div>
                <div>
                    <h1>*</h1>
                    <h2 className="foc-band">Gift Service</h2>
                    <p className="foc-short">Support gift service</p>
                </div>
            </section>

            <section>
                <div>
                    <h2>Deal of the day</h2>
                    <div className="products">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2>wellness Product</h2>
                    <div className="products">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2>Daily Need</h2>
                    <div className="products">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </section>
            <footer>
                <section className="footer-top">
                    <div>
                        <h4 className="footer-div">Usefull links</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Products</li>
                            <li>Help</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-div">
                        <h4>Blogs</h4>
                        <ul>
                            <p>How to buy a product in festival session</p>
                            <p>Heavy discount on elctric product buy a product</p>
                            <p>Make a account and sell your product</p>
                            <p>Lorem ipsum lorem ipsum</p>
                        </ul>
                    </div>
                    <div className="footer-div">
                        <h4>Reach us</h4>
                        <address>Delhi Cannaught place block-b near H&m Store</address>
                        <p>+120-3449491</p>
                        <p>emed@help.com</p>
                    </div>
                </section>
                <section className="footer-bottom">
                    <h4>E-med | Right Reserved</h4>
                </section>
            </footer>
        </>
    )
}

export default Home;