import { useTranslation } from 'react-i18next'
import relaxingImg from '../assets/images/relaxingImg.jpeg'
import therapeuticImg from '../assets/images/therapeuticImg.jpeg'
import sportsImg from '../assets/images/sportsImg.jpeg'
import i18n from '../i18n'

export const ServicesOffered = () => {
    const { t } = useTranslation()
    const lang = i18n.language as 'en' | 'es' | 'it'

    const services = t('Services.Cards', { returnObjects: true }) as Array<{
        title: string
        description: string
        duration: Array<{ time: string; price: string }>
        image: string
    }>

    const images: { [key: string]: string } = {
        relaxingImg,
        therapeuticImg,
        sportsImg,
    }

    const getWhatsappLink = (lang: 'en' | 'es' | 'it', serviceName: string) => {
        const messages = {
            en: `Hello, I would like to schedule an appointment for the service: ${serviceName}`,
            es: `Hola, me gustaría agendar una cita para el servicio: ${serviceName}`,
            it: `Ciao, vorrei fissare un appuntamento per il servizio: ${serviceName}`,
        }

        const encodedMessage = encodeURIComponent(messages[lang])
        return `https://wa.me/34675065798?text=${encodedMessage}`
    }

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
                            style={{
                                backgroundImage: `url(${images[service.image]})`,
                            }}
                        ></div>
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul>
                                {service.duration.map((d, i) => (
                                    <li key={i} style={{ display: 'flex', justifyContent: 'space-around', }}>
                                        <strong>{d.price}</strong>  {d.time}
                                    </li>
                                ))}
                            </ul>
                            <br />
                            <a
                                href={getWhatsappLink(lang, service.title)}
                                target="_blank"
                                className="boton-info"
                            >
                                {t('Services.ScheduleAppointment')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
