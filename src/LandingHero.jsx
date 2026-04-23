import LandingImage from './assets/LandImg.png';
import Curve from './assets/teal-curve.svg';
import { Link } from "react-router-dom";

function LandingHero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <div className="hero-copy">
                    <h1>The hassle-free platform to sell globally for less</h1>
                    <p>Connect your bank account and start selling to the world today!</p>
                </div>
                <div className="actions">
                    <Link to="/Dashboard">
                    <button className="btn get-started">Get Started</button>
                </Link>
                <Link to="/auth">
                    <button className="btn book-demo">Sign In</button>
                </Link>
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