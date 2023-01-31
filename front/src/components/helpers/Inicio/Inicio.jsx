import React from 'react';
import './Inicio.css'
import imgInicio from '/src/assets/img/inicio.jpg'

const Inicio = () => (
    <section className="inicio" id="inicio">
        <img className="inicio-img" src={imgInicio} alt="Imagen de inicio" />
        <div className="home-text-container">
            <h1 className="inicio-titulo">Haciendo realidad casas soñadas</h1>
            <h5 className="inicio-parrafo">Tu sueño, nuestra realidad</h5>
            <a href="#contacto" className="inicio-btn">¡Consúltanos ya!</a>
        </div>
    </section>
);


export default Inicio;
