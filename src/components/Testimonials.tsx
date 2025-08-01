// src/components/Testimonials.tsx
import React, { useState, useEffect } from 'react';

interface Testimonial {
    quote: string;
    author: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            'After months of suffering from back pain, Lua’s therapeutic massages have been my salvation. The atmosphere is relaxing and the professionalism of the therapists is exceptional.',
        author: '- María Fernández',
    },
    {
        quote:
            'I come regularly to keep work stress at bay. The combination of techniques they use and the personalized attention make every session a unique experience.',
        author: '- Carlos Rodríguez',
    },
    {
        quote:
            'As an athlete, Lua’s sports massages are a fundamental part of my training routine. They’ve improved my performance and helped prevent injuries.',
        author: '- Laura Martínez',
    },
];

export const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials" id="testimonios">
            <div className="section-header" style={{marginTop: 30}}>
                <h2>Client Testimonials</h2>
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
                <button onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}>
                    &#8249;
                </button>
                <button onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}>
                    &#8250;
                </button>
            </div>
        </section>
    );
};