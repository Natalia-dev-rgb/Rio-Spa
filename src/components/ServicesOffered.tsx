import { useTranslation } from 'react-i18next'
import relaxingImg from '../assets/images/2.jpg'
import therapeuticImg from '../assets/images/3.jpg'
import sportsImg from '../assets/images/4.jpg'
import i18n from '../i18n'
import { getWhatsappLink } from '../utils/constants'

export const ServicesOffered = () => {
    const { t } = useTranslation()
    const whatsappLink = getWhatsappLink(i18n.language as 'en' | 'es' | 'it')

    const services = t('Services.Cards', { returnObjects: true }) as Array<{
        title: string
        description: string
    }>

    const images = [relaxingImg, therapeuticImg, sportsImg]

    return (
        <section className="services" id="servicios">
            <div className="section-header">
                <h2>{t('Services.Title')}</h2>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div
                            className="service-img"
                            style={{ backgroundImage: `url(${images[index]})` }}
                        ></div>
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                className="boton-info"
                            >
                                {t('Services.MoreInfo')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
