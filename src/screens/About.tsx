import { useTranslation } from 'react-i18next';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';
import { getWhatsappLink } from '../utils/constants';
import '../styles/about.css';
import i18n from '../i18n';

export const About = () => {
    const { t } = useTranslation();
    const whatsappLink = getWhatsappLink(i18n.language as 'en' | 'es' | 'it')

    return (
        <>
            <Header />
            <div className="about">
                <section className="about-container">
                    <div className="about-content">
                        <h2>{t('AboutUs.Title')}</h2>
                        <p>{t('AboutUs.Description')}</p>
                        <p>{t('AboutUs.Paragraphs.0')}</p>
                        <p>{t('AboutUs.Paragraphs.1')}</p>
                        <p>{t('AboutUs.Paragraphs.2')}</p>
                    </div>
                    <a href={whatsappLink} className="btn-equipo">
                        {t('About.Meet')}
                    </a>
                </section>
            </div>
            <Footer />
        </>
    );
};
