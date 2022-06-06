import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavbarCont from '../components/Navbar'
import FormCont from '../containers/Form'
import Products from '../containers/Products'




const AppRoutes = () => {
  return (
    <BrowserRouter>
    <NavbarCont />
        <Routes>
          {/* Rutas publicas */}
          < Route path="/" element={<FormCont />} />
          < Route path="/products" element={<Products />} />
          {/* Redireccionamiento */}
          <Route path="*" element={< Navigate to="/" />} />
          </Routes>
    </BrowserRouter>
          )
}

          export default AppRoutes