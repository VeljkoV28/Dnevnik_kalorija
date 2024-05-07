import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Service from '../../services/Dnevnik_kalorija'
import { RoutesNames } from "../../constants";
import InputText from "../../components/InputText";
import Akcije from "../../components/Akcije";
import useError from "../../hooks/useError";

export default function Dnevnik_kalorijaPromjeni() {
  const [dnevik_kalorija, setDnevnik_kalorija] = useState({});

  const routeParams = useParams();
  const navigate = useNavigate();
  const { prikaziError } = useError();


  async function dohvatiDnevnik_kalorija() {
    const odgovor = await Service.getBySifra('Dnevnik kalorija',routeParams.sifra);
    if(!odgovor.ok){
      prikaziError(odgovor.podaci);
      return;
    }
    setDnevnik_kalorija(odgovor.podaci);
  }

  async function promjeniDnevnik_kalorija(dnevik_kalorija) {
    const odgovor = await Service.promjeni('Dnevnik kalorija',routeParams.sifra, dnevik_kalorija);
    if(odgovor.ok){
      navigate(RoutesNames.DNEVNIK_KALORIJA_PREGLED);
      return;
    }
    prikaziError(odgovor.podaci);
  }

  useEffect(() => {
    dohvatiDnevnik_kalorija();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  function handleSubmit(e) {
    e.preventDefault();
    const podaci = new FormData(e.target);
    promjeniDnevnik_kalorija({
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