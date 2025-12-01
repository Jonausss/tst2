import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'

import Login from './assets/routes/Login'
import Feed from './assets/routes/Feed'

import QuandoNos from './assets/routes/Sites/QuandoNos'
import CafeteriaEntrePatas from './assets/routes/Sites/CafeteriaEntrePatas'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/feed' element={<Feed/>}/>

        <Route path='/11' element={<QuandoNos/>}/>
        <Route path='/12' element={<CafeteriaEntrePatas/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
