import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'

import Login from './assets/routes/Login'

import QuandoNos from './assets/routes/Sites/QuandoNos'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Login/>}/>

        <Route path='/11' element={<QuandoNos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
