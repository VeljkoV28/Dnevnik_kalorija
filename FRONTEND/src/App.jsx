import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mojLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './pages/Pocetna'
import Dnevnici_kalorija from './pages/dnevnici_kalorija/Dnevnici_kalorija'
import Dnevnici_kalorijaDodaj from './pages/dnevnici_kalorija/Dnevnici_kalorijaDodaj'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />

        <Route path={RoutesNames.DNEVNIK_KALORIJA_PREGLED} element={<Dnevnici_kalorija/>} />
        <Route path={RoutesNames.DNEVNIK_KALORIJA_NOVI} element={<Dnevnici_kalorijaDodaj />} />
        
      </Routes>
    </>
  )
}

export default App
