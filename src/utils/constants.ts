export const getWhatsappLink = (lang: 'en' | 'es' | 'it' = 'en') => {
    const messages = {
        en: "Hello, I would like more information",
        es: "Hola, me gustaría más información",
        it: "Ciao, vorrei maggiori informazioni",
    }

    const encodedMessage = encodeURIComponent(messages[lang])
    return `https://wa.me/34675065798?text=${encodedMessage}`
}
