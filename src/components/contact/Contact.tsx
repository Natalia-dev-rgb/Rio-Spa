import { useTranslation } from 'react-i18next'
import './styles.css'

export const Contact = () => {
    const { t } = useTranslation()

    return (
        <section className="contact" id="contact">
            <div className="section-header">
                <h2>{t('Contact.Title')}</h2>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>{t('Contact.InfoTitle')}</h3>
                    <div className="contact-info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{t('Contact.Info.Address')}</span>
                    </div>
                    <div className="contact-info-item">
                        <i className="fas fa-phone"></i>
                        <span>{t('Contact.Info.Phone')}</span>
                    </div>
                    <div className="contact-info-item">
                        <i className="fas fa-envelope"></i>
                        <span>{t('Contact.Info.Email')}</span>
                    </div>
                    <div className="contact-info-item">
                        <i className="fas fa-clock"></i>
                        <span>{t('Contact.Info.Schedule')}</span>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>{t('Contact.BookTitle')}</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">{t('Contact.Form.Name')}</label>
                            <input type="text" id="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('Contact.Form.Email')}</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">{t('Contact.Form.Phone')}</label>
                            <input type="tel" id="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">{t('Contact.Form.Service')}</label>
                            <select id="service" required>
                                <option value="">{t('Contact.Form.Select')}</option>
                                <option value="relajante">{t('Contact.Form.Relaxing')}</option>
                                <option value="terapeutico">{t('Contact.Form.Therapeutic')}</option>
                                <option value="deportivo">{t('Contact.Form.Sports')}</option>
                                <option value="otros">{t('Contact.Form.Other')}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t('Contact.Form.Message')}</label>
                            <textarea id="message"></textarea>
                        </div>
                        <button type="submit" className="button">{t('Contact.Form.Submit')}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
