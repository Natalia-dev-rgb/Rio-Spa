import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();

    const handleScrollTo = (sectionId: string) => {
        navigate(`/#${sectionId}`);
    };

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Lua Massage</h3>
                    <p>
                        Your space for wellness and balance in the heart of the city. Personalized therapies for body and mind.
                    </p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a
                            href="https://wa.me/34651746907?text=Hola%2C%20megustaría%20saber%20el%20precio%20del%20servicio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a onClick={() => handleScrollTo('inicio')}>Home</a></li>
                        <li><a onClick={() => handleScrollTo('servicios')}>Services</a></li>
                        <li><a onClick={() => handleScrollTo('nosotros')}>About Us</a></li>
                        <li><a onClick={() => handleScrollTo('testimonios')}>Testimonials</a></li>
                        <li><a onClick={() => handleScrollTo('contacto')}>Contact</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Relaxing Massage</a></li>
                        <li><a href="#">Therapeutic Massage</a></li>
                        <li><a href="#">Sports Massage</a></li>
                        <li><a href="#">Reflexology</a></li>
                        <li><a href="#">Aromatherapy</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Opening Hours</h3>
                    <ul>
                        <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                        <li>Saturday: 10:00 AM - 6:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; 2025 Lua Massage. All rights reserved.</p>
            </div>
        </footer>
    );
};
