import React, { useState } from 'react';
import './Menu.css'
import { MenuLista } from './MenuLista';

const Menu = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 50 && !scrolled) {
            setScrolled(true);
        } else if (window.pageYOffset <= 50 && scrolled) {
            setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);


    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top  ${scrolled ? "nav-scrolled" : ""}`}>
            <section className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="../../../src/assets/icons/logo.png" width={150} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse" id="navbarNavDropdown">
                    <MenuLista />
                </section>
            </section>
        </nav>
    );
}

export default Menu;
