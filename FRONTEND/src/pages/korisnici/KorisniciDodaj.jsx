import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Service from '../../services/KorisnikService';
import { RoutesNames } from '../../constants';
import InputText from '../../components/InputText';
import Akcije from '../../components/Akcije';
import useError from "../../hooks/useError";


export default function KorisniciDodaj() {
    const navigate = useNavigate();
    const { prikaziError } = useError();
  
  
    async function dodajKorisnik(Korisnik) {
      const odgovor = await Service.dodaj('Korisnik',Korisnik);
      if(odgovor.ok){
        navigate(RoutesNames.KORISNIK_PREGLED);
        return
      }
      prikaziError(odgovor.podaci);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
  
  
      dodajKorisnik({
        korisnicko_ime: podaci.get('korisnicko ime'),
        visina: podaci.get('visina'),
        tezina: podaci.get('tezina'),
        zeljena_tezina: podaci.get('zeljena tezina')
      });
    }


    
    

    return (
        <Container>
          <Form onSubmit={handleSubmit}>
            <InputText atribut='korisnicko ime' vrijednost='' />
            <InputText atribut='visina' vrijednost='' />
            <InputText atribut='tezina' vrijednost='' />
            <InputText atribut='zeljena tezina' vrijednost='' />
            
            <Akcije odustani={RoutesNames.KORISNIK_PREGLED} akcija='Dodaj korisnika' />       
          </Form>
        </Container>
      );
    }
    