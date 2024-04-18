import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mojLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './pages/Pocetna'
import Korisnici from './pages/korisnici/Korisnici'
import KorisniciDodaj from './pages/korisnici/KorisniciDodaj'
import KorisniciPromjena from "./pages/korisnici/KorisniciPromjena"
import ErrorModal from './components/ErrorModal';
import useError from "./hooks/useError"

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />

        <Route path={RoutesNames.KORISNIK_PREGLED} element={<Korisnici />} />
        <Route path={RoutesNames.KORISNIK_NOVI} element={<KorisniciDodaj />} />
        <Route path={RoutesNames.KORISNIK_PROMJENA} element={<KorisniciPromjena />} />
        
      </Routes>
    </>
  )
}

export default App

