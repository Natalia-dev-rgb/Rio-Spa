import i18n from "../i18n"
import { getWhatsappLink } from "../utils/constants"

export const WhatsappFloat = () => {
    const link = getWhatsappLink(i18n.language as 'en' | 'es' | 'it')

    return (
        <a href={link} className="whatsapp" target="_blank"> <i
            className="fab fa-whatsapp whatsapp-icon"></i></a>
    )
}
