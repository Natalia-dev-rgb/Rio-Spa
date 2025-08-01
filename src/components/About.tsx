import aboutImgMb from '../assets/gallery/jessi-1.jpg';
import aboutImg from '../assets/images/2.jpg';
import { whatsappLink } from '../utils/constants';

export const About = () => {
    return (
        <section className="about" id="nosotros">
            <div className="about-container">
                <div className="about-img">
                    <picture>
                        <source media="(max-width: 768px)" srcSet={aboutImgMb} />
                        <img
                            src={aboutImg}
                            alt={'Exclusive Erotic Massages'}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                        />
                    </picture>
                </div>
                <div className="about-content">
                    <h2>Exclusive Erotic Massages</h2>
                    <p>An intimate and personalized experience for your well-being.</p>
                    <p>
                        In each session, I invite you to enjoy a unique moment, designed to connect with your pleasure,
                        relax your body and mind, and release tension through conscious and sensual touch.
                    </p>
                    <p>
                        This service is aimed at people who want to experience something different with total discretion,
                        without rushing, and in an environment where every detail is designed for your comfort and pleasure.
                    </p>

                    <a href={whatsappLink} className="btn-equipo">Meet Our Masseuse</a>
                </div>
            </div>
        </section>
    );
};
