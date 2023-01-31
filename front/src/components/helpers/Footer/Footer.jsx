import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa'
import './Footer.css'
import logo from '/src/assets/icons/logo.png'

const FooterLogo = ({ logo, alt }) => (

    <div className='footer-logo'>
        <img src={logo} alt={alt} />
    </div>
)
const FooterLocation = ({ location, address }) => (

    <div className='footer-location'>
        <h4>{location}</h4>
        <p className='text-muted'>{address}</p>
    </div>
)
const FooterContact = ({ contact, phone }) => (

    <div className='footer-contact'>
        <h4>{contact}</h4>
        <p className='text-muted'>{phone}</p>
    </div>
)
const FooterSocial = ({ social, icons }) => (

    <div className='footer-social'>
        <h4>{social}</h4>
        <div className='footer-social-icons'>
            {icons.map(({ href, Icon }) => (
                <a href={href} key={href}>
                    <Icon />
                </a>
            ))}
        </div>
    </div>
)
const FooterCopyright = ({ copyright, createdBy, link }) => (

    <div className='footer-copyright text-muted'>
        <p>{copyright}</p>
        <p>{createdBy} <a href={link} target="_blank"> José Sosa</a></p>
    </div>
)
export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <FooterLogo logo={logo} alt='Inmo Web Logo' />
                <FooterLocation location='Ubicación' address='Calle Vista Alegre, 13, Valencia, C.P. 10445' />
                <FooterContact contact='Contacto' phone='Teléfono: +123 456 7890' />
                <FooterSocial
                    social='Redes sociales'
                    icons={[
                        { href: '#1', Icon: FaFacebookSquare },
                        { href: '#2', Icon: FaTwitterSquare },
                        { href: '#3', Icon: FaInstagram },
                    ]}
                />
            </div>
            <FooterCopyright
                copyright='Copyright © Inmo Web Todos los derechos reservados'
                createdBy='Relizada por'
                link='https://www.linkedin.com/in/jose-armando-sosa-cardona/'
            />
        </footer>
    )
}