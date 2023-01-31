export const AnuncioItem = ({ anuncio }) => {
    return (
        <div className="anuncio-item">
            <div className='contenedor-img'>
                <img src={anuncio.img} alt={anuncio.titulo} className="anuncio-img" />
            </div>
            <div className="anuncio-info">
                <h4 className="anuncio-title">{anuncio.titulo}</h4>
                <p className="anuncio-description">{anuncio.descripcion}</p>
                <a href="#contacto" className='anuncio-btn'>¡Consúltanos ya!</a>
            </div>
        </div>
    )
}