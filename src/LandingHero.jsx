import LandingImage from './assets/LandImg.png';
import Curve from './assets/teal-curve.svg';

function LandingHero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <div className="hero-copy">
                    <h1>The hassle-free platform to sell globally for less</h1>
                    <p>Connect your bank account and start selling to the world today!</p>

                    <div className="hero-actions">
                        <button className="GetStarted">Get Started</button>
                        <button className="BookDemo">Book a demo</button>
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-image-frame">
                    <div className="hero-card-bg secondary"></div>
                    <div className="hero-card-bg primary"></div>

                    <img src={LandingImage} className="landing-image" />
                    <img src={Curve} className="curve" />
                </div>
            </div>
        </section>
    );
}

export default LandingHero;