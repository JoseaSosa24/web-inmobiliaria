import React from 'react';
import './Inicio.css'
import imgInicio from '../../../src/assets/img/inicio.jpg'

const Inicio = () => {
    return (
        <section className='inicio' id='inicio'>
            <img className="" src={imgInicio} />
            <div className="home-text-container">
                <h1>Bienvenido a mi sitio</h1>
            </div>
        </section>
    );
}

export default Inicio;
