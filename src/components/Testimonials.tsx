import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Testimonials: React.FC = () => {
    const { t } = useTranslation()
    const testimonials = t('Testimonials.Quotes', { returnObjects: true }) as Array<{
        quote: string
        author: string
    }>

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [testimonials.length])

    return (
        <section className="testimonials" id="testimonios">
            <div className="section-header" style={{ marginTop: 30 }}>
                <h2>{t('Testimonials.Title')}</h2>
            </div>

            <div className="testimonial-carousel">
                {testimonials.map((testimonial, index) => (
                    <div
                        className={`testimonial ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                    >
                        "{testimonial.quote}"
                        <div className="testimonial-author">{testimonial.author}</div>
                    </div>
                ))}
            </div>

            <div className="testimonial-controls">
                <button
                    onClick={() =>
                        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
                    }
                >
                    &#8249;
                </button>
                <button
                    onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
                >
                    &#8250;
                </button>
            </div>
        </section>
    )
}
