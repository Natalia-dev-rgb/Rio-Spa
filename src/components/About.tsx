import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import aboutImgMb from '../assets/gallery/jessi-1.jpg'
import aboutImg from '../assets/images/2.jpg'

export const About = () => {
    const { t } = useTranslation()
    const paragraphs = t('About.Paragraphs', { returnObjects: true }) as string[]

    return (
        <section className="about" id="nosotros">
            <div className="about-container">
                <div className="about-img">
                    <picture>
                        <source media="(max-width: 768px)" srcSet={aboutImgMb} />
                        <img
                            src={aboutImg}
                            alt={t('About.Title')}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                        />
                    </picture>
                </div>
                <div className="about-content">
                    <h2>{t('About.Title')}</h2>
                    <p>{t('About.Subtitle')}</p>
                    {paragraphs.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                    <Link to="/about-us" className="btn-equipo">
                        {t('About.Meet')}
                    </Link>
                </div>
            </div>
        </section>
    )
}
