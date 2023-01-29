import React, { useEffect, useState } from 'react'
import { Titulo } from '../Titulo'
import './Anuncios.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnuncioItem } from './AnuncioItem';

export const Anuncios = () => {

    const [datosAnuncios, setDatosAnuncios] = useState([]);

    useEffect(() => {
        fetch('./src/json/anuncios.json')
            .then(response => response.json())
            .then(datosAnuncios => setDatosAnuncios(datosAnuncios.anuncios))
    }, []);

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
                {Array.isArray(datosAnuncios) && datosAnuncios.length > 0 &&
                    datosAnuncios.map((anuncio, index) => (
                        <AnuncioItem key={index} anuncio={anuncio} />
                    ))
                }
            </section>

        </>
    )
}
