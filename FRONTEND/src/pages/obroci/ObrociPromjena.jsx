import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Service from "../../services/ObrokService"
import { RoutesNames } from "../../constants";
import InputText from "../../components/InputText";
import Akcije from "../../components/Akcije";
import useError from "../../hooks/useError";

export default function ObrociPromjeni() {
  const [obrok, setObrok] = useState({});

  const routeParams = useParams();
  const navigate = useNavigate();
  const { prikaziError } = useError();


  async function dohvatiObroke() {
    const odgovor = await Service.getBySifra('Obrok',routeParams.sifra);
    if(!odgovor.ok){
      prikaziError(odgovor.podaci);
      return;
    }
    setObrok(odgovor.podaci);
  }

  async function promjeniObroke(obrok) {
    const odgovor = await Service.promjeni('Obrok',routeParams.sifra, obrok);
    if(odgovor.ok){
      navigate(RoutesNames.OBROK_PREGLED);
      return;
    }
    prikaziError(odgovor.podaci);
  }

  useEffect(() => {
    dohvatiObroke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  function handleSubmit(e) {
    e.preventDefault();
    const podaci = new FormData(e.target);
    promjeniObroke({
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