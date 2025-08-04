import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './cookie-banner.css';

export const CookieBanner = () => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const accepted = localStorage.getItem('cookie-consent');
        if (!accepted) {
            setVisible(true);
        }
    }, []);

    const handleConsent = (accepted: boolean) => {
        localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'rejected');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner">
            <p>{t('Cookie.Message')}</p>
            <div className="cookie-buttons">
                <button onClick={() => handleConsent(true)}>{t('Cookie.Accept')}</button>
                <button onClick={() => handleConsent(false)}>{t('Cookie.Reject')}</button>
            </div>
        </div>
    );
};
