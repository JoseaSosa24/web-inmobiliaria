import React from 'react'
import './Contacto.css'
export const Contacto = () => {
    return (
        <section className='contacto' id='contacto'>
            <div class="form-container" id=''>
                <form class="form">
                    <h2 class="form-title">Formulario de contacto</h2>
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
