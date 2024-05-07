import { Container, Form } from "react-bootstrap";
import Service from '../../services/Dnevnik_kalorija';
import InputText from "../../components/InputText";
import Akcije from "../../components/Akcije";
import useError from "../../hooks/useError";
import { useNavigate } from "react-router";
import { RoutesNames } from "../../constants";




export default function Dnevnici_kalorijaDodaj() {
    const navigate = useNavigate ();
    const { prikaziError } = useError();
  
  
    async function dodajDnevnik_kalorija(Dnevnik_kalorija) {
      const odgovor = await Service.dodaj('Dnevnik_kalorija',Dnevnik_kalorija);
      if(odgovor.ok){
        navigate(RoutesNames.DNEVNIK_KALORIJA_PREGLED);
        return
      }
      prikaziError(odgovor.podaci);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
  
  
      dodajDnevnik_kalorija({
        Vrsta_aktivnosti: podaci.get('vrsta aktivnosti'),
        Potroseno_kalorija: podaci.get('potroseno kalorija'),
        Uneseno_kalorija: podaci.get('uneseno kalorija')
        
      });
    }


    
    

    return (
        <Container>
          <Form onSubmit={handleSubmit}>
            <InputText atribut='vrsta aktivnosti' vrijednost='' />
            <InputText atribut='potroseno kalorija' vrijednost='' />
            <InputText atribut='uneseno kalorija' vrijednost='' />
            
            
            
            <Akcije odustani={RoutesNames.DNEVNIK_KALORIJA_PREGLED} akcija='Dodaj dnevnik kalorija' />       
          </Form>
        </Container>
      );
    }
    