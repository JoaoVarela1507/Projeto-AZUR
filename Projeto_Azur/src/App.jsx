import React from "react"
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/login.jsx'
import Cadastro from './pages/cadastro.jsx'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/cadastro" />} />
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App