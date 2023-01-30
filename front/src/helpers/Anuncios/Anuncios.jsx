import React, { useEffect, useState } from 'react'
import { Titulo } from '../Titulo'
import './Anuncios.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnuncioItem } from './AnuncioItem';
import dotenv from 'dotenv';




export const Anuncios = () => {

    const [datosAnuncios, setDatosAnuncios] = useState([]);
    
    const anuncios= {
        "anuncios": [
            {
                "id": 1,
                "img": "https://i.postimg.cc/X7XyTLSx/img-anuncio-1.png",
                "titulo": "Espectacular apartamento de lujo",
                "descripcion": "Este impresionante apartamento de lujo cuenta con una ubicación privilegiada en el centro de la ciudad, con vistas panorámicas impresionantes y una amplia gama de servicios de lujo."
            },
            {
                "id": 2,
                "img": "https://i.postimg.cc/dVyZ000y/img-anuncio-2.png",
                "titulo": "8000 metros cuadrados en Santa Solana",
                "descripcion": "Atrae a compradores potenciales con una descripción por escrito clara que enumere las características más atractivas de tu propiedad."
            },
            {
                "id": 3,
                "img": "https://i.postimg.cc/VN9SjHns/img-anuncio-3.png",
                "titulo": "Casa de campo con amplio jardín",
                "descripcion": "Este encantador hogar de campo ofrece una gran cantidad de espacio al aire libre en su amplio jardín. Con una amplia sala de estar, cocina moderna y varias habitaciones, esta casa es ideal para una gran familia."
            },
            {
                "id": 4,
                "img": "https://i.postimg.cc/50xXpqSB/img-anuncio-4.png",
                "titulo": "Apartamento de 2 dormitorios en Belden Park",
                "descripcion": "Atrae a compradores potenciales con una descripción por escrito clara que enumere las características más atractivas de tu propiedad."
            },
            {
                "id": 5,
                "img": "https://i.postimg.cc/HL1c8CJP/img-anuncio-5.png",
                "titulo": "Casa urbana clásica 3 dormitorios con aparcamiento y patio trasero",
                "descripcion": "Atrae a compradores potenciales con una descripción por escrito clara que enumere las características más atractivas de tu propiedad."
            }
           
        ]
    };

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
                {Array.isArray(anuncios.anuncios) && anuncios.anuncios.length > 0 &&
                    anuncios.anuncios.map((anuncio, index) => (
                        <AnuncioItem key={index} anuncio={anuncio} />
                    ))
                }
            </section>

        </>
    )
}
