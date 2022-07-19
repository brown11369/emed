import "../style/home.css"

import Menu from "./Menu";

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
                        <div className="card">
                            <img src="./assets/images/prod.jpg" alt="prod" />
                            <div>
                                <span>200 Rs.</span>
                                <del>600 Rs.</del>
                            </div>
                            <h4>Ventilator</h4>
                        </div>
                        <div className="card">
                            <img src="./assets/images/prod.jpg" alt="prod" />
                            <div>
                                <span>200 Rs.</span>
                                <del>600 Rs.</del>
                            </div>
                            <h4>Ventilator</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;