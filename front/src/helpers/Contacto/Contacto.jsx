import React from 'react'
import './Contacto.css'
export const Contacto = () => {
    return (
        <section className='contacto' id='contacto'>

            <div className="form-container" id=''>

                <h2 className="form-title">contacto</h2>
                <form className="form">
                    <p classNameName="form-parrafo" id='form-parrafo'>Nuestro negocio no es vender propiedades, sino ayudar a nuestro cliente a tomar la decisión perfecta.</p>
                    <div className="form-group">
                        <input type="text" placeholder="Nombre" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Correo" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Celular" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Motivo de la solicitud" required></textarea>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>


    )
}
