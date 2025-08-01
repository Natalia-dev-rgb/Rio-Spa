import mapImage from '../../assets/images/mapa.jpg';
import './styles.css';

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="section-header">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div className="contact-info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Carrasquert 6, City</span>
                    </div>
                    <div className="contact-info-item">
                        <i className="fas fa-phone"></i>
                        <span>+34 675 06 57 98</span>
                    </div>
                    <div className="contact-info-item">
                        <i className="fas fa-envelope"></i>
                        <span>info@luamassage.net</span>
                    </div>
                    <div className="contact-info-item">
                        <i className="fas fa-clock"></i>
                        <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                    </div>

                    <div className="map" style={{ marginTop: '20px' }}>
                        <a
                            href="https://www.google.com/maps/place/C%2F+de+Carrasquer,+6,+Ciutat+Vella,+46001+Val%C3%A8ncia,+Espa%C3%B1a/@39.4761735,-0.3820295,17.5z"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={mapImage} alt="Location map" style={{ width: '100%', borderRadius: '10px' }} />
                        </a>
                    </div>
                </div>

                <div className="contact-form">
                    <h3>Book Your Session</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service</label>
                            <select id="service" required>
                                <option value="">Select a service</option>
                                <option value="relajante">Relaxing Massage</option>
                                <option value="terapeutico">Therapeutic Massage</option>
                                <option value="deportivo">Sports Massage</option>
                                <option value="otros">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message"></textarea>
                        </div>
                        <button type="submit" className="button">Send Request</button>
                    </form>
                </div>
            </div>
        </section>
    );
};
