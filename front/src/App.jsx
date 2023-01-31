import { useEffect, useState } from 'react'
import './App.css'
import Menu from './components/helpers/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './components/helpers/Inicio/Inicio'
import Nosotros from './components/helpers/Nosotros/Nosotros'
import { Anuncios } from './components/helpers/Anuncios/Anuncios'
import { Servicios } from './components/helpers/Servicios/Servicios'
import { Contacto } from './components/helpers/Contacto/Contacto'
import { Footer } from './components/helpers/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);



  return (
    <div className="App">
      {showBtn && (
        <button className='btn'>
          <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '20px' }} onClick={() => window.scrollTo(0, 0)} />
        </button>
      )}
      <Menu />
      <Inicio />
      <Nosotros />
      <Anuncios />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
