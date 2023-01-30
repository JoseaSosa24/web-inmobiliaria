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
                    <p className='text-muted' >Calle Vista Alegre, 13,
                        Valencia, C. P. 10445</p>
                </div>
                <div className='footer-contact'>
                    <h4>Contacto</h4>
                    <p className='text-muted'>Teléfono: +123 456 7890</p>
                </div>
                <div className='footer-social'>
                    <h4>Redes sociales</h4>
                    <div className='footer-social-icons'>
                        <a href=''>
                            <FaFacebookSquare />
                        </a>
                        <a href=''>
                            <FaTwitterSquare />
                        </a>
                        <a href=''>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-copyright text-muted'>
                <p>Copyright &copy; Inmo Web Todos los derechos reservados</p>
                <p>&copy; Relizada por <a href='https://www.linkedin.com/in/jose-armando-sosa-cardona/' target="_blank"> José Sosa</a> </p>
            </div>
        </footer>
    )
}
