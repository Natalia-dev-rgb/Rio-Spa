import relaxingImg from '../assets/images/2.jpg';
import therapeuticImg from '../assets/images/3.jpg';
import sportsImg from '../assets/images/4.jpg';
import { whatsappLink } from '../utils/constants';

export const ServicesOffered = () => {
    return (
        <section className="services" id="servicios">
            <div className="section-header">
                <h2>Our Services</h2>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <div
                        className="service-img"
                        style={{ backgroundImage: `url(${relaxingImg})` }}
                    ></div>
                    <div className="service-content">
                        <h3>Relaxing Massage</h3>
                        <p>
                            Enjoy smooth and fluid movements that reduce tension and stress,
                            improve circulation, and provide a deep sense of well-being.
                        </p>
                        <a href={whatsappLink} target='_blank' className="boton-info">More Information</a>
                    </div>
                </div>

                <div className="service-card">
                    <div
                        className="service-img"
                        style={{ backgroundImage: `url(${therapeuticImg})` }}
                    ></div>
                    <div className="service-content">
                        <h3>Therapeutic Massage</h3>
                        <p>
                            A specific treatment for muscle and joint pain, focused on relieving chronic pain
                            and improving mobility in affected areas.
                        </p>
                        <a href={whatsappLink} target='_blank' className="boton-info">More Information</a>
                    </div>
                </div>

                <div className="service-card">
                    <div
                        className="service-img"
                        style={{ backgroundImage: `url(${sportsImg})` }}
                    ></div>
                    <div className="service-content">
                        <h3>Sports Massage</h3>
                        <p>
                            Ideal for athletes and active individuals, this massage helps prevent injuries,
                            accelerate muscle recovery, and enhance physical performance.
                        </p>
                        <a href={whatsappLink} target='_blank' className="boton-info">More Information</a>
                    </div>
                </div>
            </div>
        </section>
    );
};