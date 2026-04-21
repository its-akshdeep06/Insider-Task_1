import LandingImage from './assets/LandImg.png';
import Curve from './assets/teal-curve.svg';

function LandingHero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <div className="hero-copy">
                    <h1>The hassle-free platform to sell globally for less</h1>
                    <p>Connect your bank account and start selling to the world today!</p>
                </div>
                <div className="actions">
                    <button className="btn get-started">Get Started</button>
                    <button className="btn book-demo">Book a demo</button>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-image-frame">
                    <div className="hero-card-bg secondary"></div>
                    <div className="hero-card-bg primary"></div>
                    <img src={LandingImage} className="landing-image" />
                </div>
            </div>

            <img src={Curve} className="curve" />
        </section>
    );
}

export default LandingHero;