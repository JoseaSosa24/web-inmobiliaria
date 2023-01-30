import React from 'react'
import './Contacto.css'
export const Contacto = () => {
    return (
        <section className='contacto' id='contacto'>

            <div class="form-container" id=''>
            
                <h2 class="form-title">contacto</h2>
                <form class="form">
                <h6 className='mt-5 mb-5 form-leyenda'>Nuestro negocio no es vender propiedades, sino ayudar a nuestro cliente a tomar la decisión perfecta.</h6>
                    <div class="form-group">
                        <input type="text" placeholder="Nombre" required />
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Correo" required />
                    </div>
                    <div class="form-group">
                        <input type="tel" placeholder="Celular" required />
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Motivo de la solicitud" required></textarea>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>


    )
}
