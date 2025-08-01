// src/components/Carrousel.tsx
import React, { useEffect, useRef, useState } from 'react';
import mobile1 from '../assets/carrousel/jessi-c-m-1.jpg';
import mobile2 from '../assets/carrousel/jessi-c-m-2.jpg';
import desktop1 from '../assets/carrousel/jessi-c-d-2.jpg';
import desktop2 from '../assets/carrousel/jessi-c-d-1.jpeg';
import { whatsappLink } from '../utils/constants';

interface Slide {
    mobileSrc: string;
    desktopSrc: string;
    alt: string;
}

const slides: Slide[] = [
    {
        mobileSrc: mobile1,
        desktopSrc: desktop1,
        alt: 'Lua Massage',
    },
    {
        mobileSrc: mobile2,
        desktopSrc: desktop2,
        alt: 'Lua Massage',
    },
];

export const Carrousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<any | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="slider-container">
            <div
                className="slider"
                style={{
                    transform: `translateX(-${currentIndex * 100}vw)`,
                    transition: 'transform 1s ease-in-out',
                    display: 'flex',
                    width: `${slides.length * 100}vw`,
                }}
            >
                {slides.map((slide, index) => (
                    <div className="slide" key={index} style={{ width: '100vw', flexShrink: 0 }}>
                        <picture>
                            <source media="(max-width: 768px)" srcSet={slide.mobileSrc} />
                            <img
                                src={slide.desktopSrc}
                                alt={slide.alt}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </picture>
                    </div>
                ))}
            </div>

            <div className="header-overlay">
                <div className="header-content">
                    <h1>Welcome to Lua Massage</h1>
                    <p>Erotic massages and sensual therapies in an exclusive atmosphere.</p>
                    <a href={whatsappLink} target='_blank' className="btn">
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
};
