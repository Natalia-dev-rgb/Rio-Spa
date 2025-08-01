import React, { useState, useEffect, useRef } from 'react';
import logo from '../../../assets/images/logo.jpg'
import { whatsappLink } from '../../../utils/constants';

export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <a href="/">
                        <img src={logo} className="faded-image" alt="Logo Lua Massage" />
                    </a>
                    <svg width="0" height="0">
                        <path
                            d="M200,50 C180,50 160,60 150,80 C140,60 120,50 100,50 C70,50 50,70 50,100 C50,150 150,250 150,250 C150,250 250,150 250,100 C250,70 230,50 200,50 Z"
                            fill="#c95f82"
                        />
                    </svg>
                    <div className="logo-text">Lua Massage</div>
                </div>
                <nav>
                    <ul id="mobile-menu" ref={menuRef} className={menuOpen ? 'active' : ''}>
                        <li><a href="/#/" onClick={closeMenu}>Home</a></li>
                        <li><a href="/#/gallery" onClick={closeMenu}>Photo Gallery</a></li>
                        <li className='bgBook'><a href={whatsappLink} target='_blank' onClick={closeMenu}>Book now</a></li>
                    </ul>
                </nav>
                <button
                    className="mobile-menu-btn"
                    id="mobile-menu-btn"
                    onClick={toggleMenu}
                    ref={buttonRef}
                    aria-label="Toggle menu"
                >
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </header>
    );
};
