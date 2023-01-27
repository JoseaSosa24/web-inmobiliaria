import React from 'react'
import { Titulo } from '../Titulo'
import './Anuncios.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Anuncios = () => {
    const settings = {
        dots: true, // mostrar puntos debajo del carrusel
        infinite: true, // hacer que el carrusel sea infinito
        speed: 500, // tiempo de transición en milisegundos
        slidesToShow: 1, // número de elementos a mostrar en el carrusel
        slidesToScroll: 1 // número de elementos a desplazar cada vez
    };

    return (
        <>

            <section className='anuncios d-flex flex-column justify-content-center' id='anuncios'>
                <Titulo children={"Anuncios"} />
                <section className='contenedor-anuncios'>
                        <div className=''>
                            <h2> Single Item</h2>
                            <Slider className='contenedor-carrusel' {...settings}>
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                            </Slider>
                        </div>
                </section>
            </section>
        </>
    )
}
