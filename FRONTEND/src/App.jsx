import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from "./constants"

import Pocetna from './pages/Pocetna'

import Korisnici from './pages/korisnici/Korisnici'
import KorisnikDodaj from './pages/korisnici/KorisniciDodaj'
import KorisnikPromjeni from './pages/korisnici/KorisniciPromjena'

import Obroci from "./pages/obroci/Obroci"
import ObrociDodaj from "./pages/obroci/ObrociDodaj"
import ObrokPromjeni from "./pages/obroci/ObrociPromjena"

import Dnevnici_kalorija from "./pages/dnevnici_kalorija/Dnevnici_kalorija"
import Dnevnici_kalorijaDodaj from "./pages/dnevnici_kalorija/Dnevnici_kalorijaDodaj"
import Dnevnik_kalorijaPromjeni from "./pages/dnevnici_kalorija/Dnevnici_kalorijaPromjena"

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
  
          <Route path={RoutesNames.OBROK_PREGLED} element={<Obroci />} />
          <Route path={RoutesNames.OBROK_NOVI} element={<ObrokDodaj />} />
          <Route path={RoutesNames.OBROK_PROMJENI} element={<ObrokPromjeni />} />

          <Route path={RoutesNames.DNEVNIK_KALORIJA_PREGLED} element={<Dnevnici_kalorija />} />
          <Route path={RoutesNames.DNEVNIK_KALORIJA_NOVI} element={<Dnevnik_kalorijaDodaj />} />
          <Route path={RoutesNames.DNEVNIK_KALORIJA_PROMJENI} element={<Dnevnik_kalorijaPromjeni />} />
        </Routes>
      </>
    )
  }
  
  export default App
