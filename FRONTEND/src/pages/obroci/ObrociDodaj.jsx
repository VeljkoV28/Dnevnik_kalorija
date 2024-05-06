import { Container, Form } from "react-bootstrap";

import Service from '../../services/ObrokService';

import InputText from "../../components/InputText";
import Akcije from "../../components/Akcije";
import useError from "../../hooks/useError";
import { useNavigate } from "react-router";
import { RoutesNames } from "../../constants";




export default function ObrociDodaj() {
    const navigate = useNavigate ();
    const { prikaziError } = useError();
  
  
    async function dodajObrok(Obrok) {
      const odgovor = await Service.dodaj('Obrok',Obrok);
      if(odgovor.ok){
        navigate(RoutesNames.OBROK_PREGLED);
        return
      }
      prikaziError(odgovor.podaci);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
  
  
      dodajObrok({
        porcija: podaci.get('porcija'),
        Uneseno_kalorija: podaci.get('uneseno kalorija'),
        
      });
    }


    
    

    return (
        <Container>
          <Form onSubmit={handleSubmit}>
            <InputText atribut='porcija' vrijednost='' />
            <InputText atribut='uneseno kalorija' vrijednost='' />
            
            <Akcije odustani={RoutesNames.OBROK_PREGLED} akcija='Dodaj obrok' />       
          </Form>
        </Container>
      );
    }
    