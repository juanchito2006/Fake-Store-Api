import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Card from './componets/Card'
import Nav from './componets/Nav'
import Users from './componets/Users'
import { useState } from 'react'

import Carrito from './componets/Carrito'
import Prod from './componets/Prod'


function App() {

  const [Carcon,setCarcon] = useState([]) //se define esta variable aqui ya que es el componente padre y no se borraran al cambiar de pagina 

  return (<> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/Prod" element={<Prod Carcon={Carcon} setCarcon={setCarcon} />} />
        <Route path="/Carrito" element={<Carrito  Carcon={Carcon} setCarcon={setCarcon}/>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
