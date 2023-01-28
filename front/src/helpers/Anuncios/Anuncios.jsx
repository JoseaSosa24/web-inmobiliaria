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
        slidesToScroll: 1,// número de elementos a desplazar cada vez
        

    };

    return (
        <>
            <section className='anuncios d-flex flex-column justify-content-center' id='anuncios'>
               
                    <Titulo children={"Anuncios"} />
                    <Slider className='contenedor-carrusel' {...settings}>
                        <div className="anuncio-item">
                            <div className='contenedor-img'>
                                <img src={"../../../../src/assets/img/img-anuncios/img-anuncio-1.jpg"} alt="Anuncio 1" className="anuncio-img" />
                            </div>

                            <div className="anuncio-info">
                                <h4 className="anuncio-title">Casa urbana clásica
                                    3 dormitorios con aparcamiento y patio trasero</h4>
                                <p className="anuncio-description">Atrae a compradores potenciales con una descripción por escrito clara
                                    que enumere las características más atractivas de tu propiedad.</p>
                                <button className='anuncio-btn'>Consultanos ya</button>
                            </div>
                        </div>
                        <div className="anuncio-item">
                            <div className='contenedor-img'>
                                <img src={"../../../../src/assets/img/img-anuncios/img-anuncio-2.png"} alt="Anuncio 1" className="anuncio-img" />
                            </div>
                            <div className="anuncio-info">
                                <h4 className="anuncio-title">Casa urbana clásica
                                    3 dormitorios con aparcamiento y patio trasero</h4>
                                <p className="anuncio-description">Atrae a compradores potenciales con una descripción por escrito clara
                                    que enumere las características más atractivas de tu propiedad.</p>
                                <button>Consultanos ya</button>
                            </div>
                        </div>
                        <div className="anuncio-item">
                            <div className='contenedor-img'>
                                <img src={"../../../../src/assets/img/img-anuncios/img-anuncio-3.png"} alt="Anuncio 1" className="anuncio-img" />
                            </div>
                            <div className="anuncio-info">
                                <h4 className="anuncio-title">Casa urbana clásica
                                    3 dormitorios con aparcamiento y patio trasero</h4>
                                <p className="anuncio-description">Atrae a compradores potenciales con una descripción por escrito clara
                                    que enumere las características más atractivas de tu propiedad.</p>
                                <button>Consultanos ya</button>
                            </div>
                        </div>
                    </Slider>
                </section>
           
        </>
    )
}
