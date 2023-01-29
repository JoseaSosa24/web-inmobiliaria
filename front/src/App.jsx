import { useState } from 'react'
import './App.css'
import Menu from './helpers/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './helpers/Inicio/Inicio'
import Nosotros from './helpers/Nosotros/Nosotros'
import { Anuncios } from './helpers/Anuncios/Anuncios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu />
      <Inicio/>
      <Nosotros/>
      <Anuncios/>
      
    </div>
  )
}

export default App
