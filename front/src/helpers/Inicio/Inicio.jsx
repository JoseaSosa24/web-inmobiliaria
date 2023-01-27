import React from 'react';
import { Carousel } from 'bootstrap';
import './Inicio.css'
const Inicio = () => {
    return (
        <section className='inicio' id='inicio'>
            <img className="" src="../../../src/assets/img/inicio.jpg" />
            <div className="home-text-container">
                <h1>Bienvenido a mi sitio</h1>
            </div>
        </section>
    );
}

export default Inicio;
