import React from 'react';
import './Inicio.css'
import imgInicio from '../../../src/assets/img/inicio.jpg'

const Inicio = () => {
    return (
        <section className='inicio' id='inicio'>
            <img className="" src={imgInicio} />
            <div className="home-text-container">
                <h1>Haciendo realidad casas soñadas.</h1>
                <h5>Tu sueño, nuestra realidad</h5>
            </div>
        </section>
    );
}

export default Inicio;
