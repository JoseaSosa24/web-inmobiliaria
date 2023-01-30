import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa'
import './Footer.css'
import logo from '/src/assets/icons/logo.png'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src={logo} alt='Inmo Web Logo' />

                </div>
                <div className='footer-location'>
                    <h4>Ubicación</h4>
                    <p>Calle Vista Alegre, 13,
                        Valencia, C. P. 10445</p>
                </div>
                <div className='footer-contact'>
                    <h4>Contacto</h4>
                    <p>Teléfono: +123 456 7890</p>
                </div>
                <div className='footer-social'>
                    <h4>Redes sociales</h4>
                    <div className='footer-social-icons'>
                        <a href='https://facebook.com/inmoweb'>
                            <FaFacebookSquare />
                        </a>
                        <a href='https://twitter.com/inmoweb'>
                            <FaTwitterSquare />
                        </a>
                        <a href='https://instagram.com/inmoweb'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>Copyright &copy; Inmo Web Todos los derechos reservados</p>
            </div>
        </footer>
    )
}
