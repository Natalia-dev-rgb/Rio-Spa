import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import mobile1 from '../assets/carrousel/spa1.webp'
import mobile2 from '../assets/carrousel/spa.web3.jpeg'
import desktop1 from '../assets/carrousel/Rio-Spa5.jpg'
import desktop2 from '../assets/carrousel/spa.web4.webp'
import { getWhatsappLink } from '../utils/constants'
import i18n from '../i18n'

interface Slide {
  mobileSrc: string
  desktopSrc: string
  alt: string
}

const slides: Slide[] = [
  {
    mobileSrc: mobile1,
    desktopSrc: desktop1,
    alt: 'Rio-Spa',
  },
  {
    mobileSrc: mobile2,
    desktopSrc: desktop2,
    alt: 'Rio-Spa',
  },
]

export const Carrousel: React.FC = () => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<any | null>(null)
  const whatsappLink = getWhatsappLink(i18n.language as 'en' | 'es' | 'it')

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 4000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

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
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="header-overlay">
        <div className="header-content">
          <h1>{t('Carrousel.Title')}</h1>
          <p>{t('Carrousel.Description')}</p>
          <a href={whatsappLink} target="_blank" className="btn">
            {t('Carrousel.BookNow')}
          </a>
        </div>
      </div>
    </div>
  )
}
