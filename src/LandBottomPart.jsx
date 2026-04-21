import Monitor from './assets/Computer.png';
import Percent from './assets/Percent.png';
import Truck from './assets/Truck.png';

function LandingBottomPart() {
    return (
        <section className="features-section">
            <div className="features-grid">
                <article className="feature-card">
                    <div className="feature-icon">
                        <img src={Monitor} alt="Monitor icon" />
                    </div>
                    <div>
                        <b>Instant Web & App</b>
                        <p>Start selling today</p>
                    </div>
                </article>

                <article className="feature-card">
                    <div className="feature-icon">
                        <img src={Percent} alt="Payment icon" />
                    </div>
                    <div>
                        <b>Integrated Payments</b>
                        <p>&lt;1% transaction fee</p>
                    </div>
                </article>

                <article className="feature-card">
                    <div className="feature-icon">
                        <img src={Truck} alt="Delivery icon" />
                    </div>
                    <div>
                        <b>Integrated global delivery and logistics</b>
                        <p className="abc">Live tracking</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default LandingBottomPart;