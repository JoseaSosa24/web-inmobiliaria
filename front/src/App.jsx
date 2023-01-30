import { useState } from 'react'
import './App.css'
import Menu from './helpers/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './helpers/Inicio/Inicio'
import Nosotros from './helpers/Nosotros/Nosotros'
import { Anuncios } from './helpers/Anuncios/Anuncios'
import { Servicios } from './helpers/Servicios/Servicios'
import { Contacto } from './helpers/Contacto/Contacto'
import { Footer } from './helpers/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
