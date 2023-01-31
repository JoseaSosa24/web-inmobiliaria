import React, { useEffect, useState } from 'react';
import './Nosotros.css';

const Nosotros = () => {
  // Crea un estado para guardar el color de fondo del nav
  const [navColor, setNavColor] = useState('#000');

  // Función que se encarga de detectar el evento de scroll y cambiar el color del nav
  const handleScroll = () => {
    const nosotros = document.getElementById("nosotros");
    const rect = nosotros.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setNavColor("white");
    } else {
      setNavColor("#000");
    }
  };

  useEffect(() => {
    // Agrega la función como un listener al evento "scroll" de la ventana
    window.addEventListener("scroll", handleScroll);
    // Elimina el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="nosotros d-flex flex-column align-items-center justify-content-center" id="nosotros" >
      <h3>Nosotros</h3>
      <p className="text-center w-75">
        Somos InmoWeb, una empresa líder en el mercado inmobiliario. Ofrecemos una amplia variedad de servicios, desde la compra y venta de propiedades hasta la gestión de alquileres. Nuestro equipo está compuesto por profesionales altamente capacitados y con una amplia experiencia en el sector inmobiliario. Trabajamos con dedicación y pasión para brindarles a nuestros clientes la mejor experiencia en sus transacciones inmobiliarias.
      </p>
    </section>
  );
};

export default Nosotros;

