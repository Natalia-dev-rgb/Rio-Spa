import { useTranslation } from 'react-i18next';
import './styles.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="language-switcher">
            {['es', 'en', 'it'].map((lng) => (
                <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`lang-btn ${i18n.language === lng ? 'active' : ''}`}
                >
                    {lng.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

export default LanguageSwitcher
