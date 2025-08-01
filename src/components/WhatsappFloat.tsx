import { whatsappLink } from '../utils/constants'

export const WhatsappFloat = () => {
    return (
        <a href={whatsappLink} className="whatsapp" target="_blank"> <i
            className="fab fa-whatsapp whatsapp-icon"></i></a>
    )
}
