import { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Service from '../../services/KorisnikService';
import { RoutesNames } from '../../constants';
import InputText from '../../components/InputText';
import Akcije from '../../components/Akcije';
import useError from "../../hooks/useError";

export default function KorisniciPromjeni() {
  const [korisnik, setKorisnik] = useState({});

  const routeParams = useParams();
  const navigate = useNavigate();
  const { prikaziError } = useError();


  async function dohvatiKorisnik() {
    const odgovor = await Service.getBySifra('Korisnik',routeParams.sifra);
    if(!odgovor.ok){
      prikaziError(odgovor.podaci);
      return;
    }
    setKorisnik(odgovor.podaci);
  }

  useEffect(() => {
    dohvatiKorisnik();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function promjeniKorisnik(korisnik) {
    const odgovor = await Service.promjeni('Polaznik',routeParams.sifra, korisnik);
    if(odgovor.ok){
      navigate(RoutesNames.KORISNIK_PREGLED);
      return;
    }
    prikaziError(odgovor.podaci);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const podaci = new FormData(e.target);
    promjeniKorisnik({
      korisnicko_ime: podaci.get('korisnicko ime'),
      visina: podaci.get('visina'),
      tezina : podaci.get('tezina'),
      zeljena_tezina: podaci.get('email'),
    });
  }


  return (
    <Container className='mt-4'>
          <Form onSubmit={handleSubmit}>
            <InputText atribut='korisnicko ime' vrijednost={korisnik.korisnicko_ime} />
            <InputText atribut='visina' vrijednost={korisnik.visina} />
            <InputText atribut='tezina' vrijednost={korisnik.tezina} />
            <InputText atribut='zeljena tezina' vrijednost={korisnik.zeljena_tezina} />
            <Akcije odustani={RoutesNames.KORISNIK_PREGLED} akcija='Promjeni korisnika' /> 
          </Form>
    </Container>
  );
}
