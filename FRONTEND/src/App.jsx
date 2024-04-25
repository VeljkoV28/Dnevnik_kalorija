import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from "./constants"

import Pocetna from './pages/Pocetna'

import Korisnici from './pages/korisnici/Korisnici'
import KorisnikDodaj from './pages/korisnici/KorisniciDodaj'
import KorisnikPromjeni from './pages/korisnici/KorisniciPromjena'

import ErrorModal from './components/ErrorModal';
import useError from './hooks/useError'



  function App() {

    const { errors, prikaziErrorModal, sakrijError } = useError();
  
  
    return (
      <>
        <ErrorModal show={prikaziErrorModal} errors={errors} onHide={sakrijError} />
        <NavBar />
        <Routes>
          <Route path={RoutesNames.HOME} element={<Pocetna />} />
          <Route path={RoutesNames.KORISNIK_PREGLED} element={<Korisnici />} />
          <Route path={RoutesNames.KORISNIK_NOVI} element={<KorisnikDodaj />} />
          <Route path={RoutesNames.KORISNIK_PROMJENI} element={<KorisnikPromjeni />} />
  
          
        </Routes>
      </>
    )
  }
  
  export default App
