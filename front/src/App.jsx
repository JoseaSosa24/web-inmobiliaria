import { useState } from 'react'
import './App.css'
import Menu from './components/helpers/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './components/helpers/Inicio/Inicio'
import Nosotros from './components/helpers/Nosotros/Nosotros'
import { Anuncios } from './components/helpers/Anuncios/Anuncios'
import { Servicios } from './components/helpers/Servicios/Servicios'
import { Contacto } from './components/helpers/Contacto/Contacto'
import { Footer } from './components/helpers/Footer/Footer'

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
