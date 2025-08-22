import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleScrollTo = (sectionId: string) => {
        navigate(`/#${sectionId}`)
    }

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Rio-Spa</h3>
                    <p>{t('Footer.Description')}</p>
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
                    <h3>{t('Footer.QuickLinks')}</h3>
                    <ul>
                        <li><a onClick={() => handleScrollTo('inicio')}>{t('Footer.Sections.Home')}</a></li>
                        <li><a onClick={() => handleScrollTo('servicios')}>{t('Footer.Sections.Services')}</a></li>
                        <li><a onClick={() => handleScrollTo('nosotros')}>{t('Footer.Sections.About')}</a></li>
                        <li><a onClick={() => handleScrollTo('testimonios')}>{t('Footer.Sections.Testimonials')}</a></li>
                        <li><a onClick={() => handleScrollTo('contacto')}>{t('Footer.Sections.Contact')}</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>{t('Footer.ServiceList.Title')}</h3>
                    <ul>
                        <li><a href="#">{t('Footer.ServiceList.Relaxing')}</a></li>
                        <li><a href="#">{t('Footer.ServiceList.Therapeutic')}</a></li>
                        <li><a href="#">{t('Footer.ServiceList.Sports')}</a></li>
                        <li><a href="#">{t('Footer.ServiceList.Reflexology')}</a></li>
                        <li><a href="#">{t('Footer.ServiceList.Aromatherapy')}</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>{t('Footer.Schedule.Title')}</h3>
                    <ul>
                        <li>{t('Footer.Schedule.Week')}</li>
                        <li>{t('Footer.Schedule.Saturday')}</li>
                        <li>{t('Footer.Schedule.Sunday')}</li>
                    </ul>
                </div>
            </div>

            <div className="copyright">
                <p>{t('Footer.Copyright')}</p>
            </div>
        </footer>
    )
}
