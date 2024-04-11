import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import Dnevnik_kalorijaService from "../../services/Dnevnik_kalorijaService";


export default function Dnevnici_kalorijaDodaj(){

    const navigate = useNavigate();

    async function dodaj(dnevnik_kalorija){
        const odqovor = Dnevnik_kalorijaService.post(dnevnik_kalorija);
        if (odqovor.greska){
            console.log((odqovor).poruka);
            alert('Pogledaj konzolu');
            return;
        }
        navigate(RoutesNames.DNEVNIK_KALORIJA_PREGLED);


    }

    function obradiSubmit(e){ // e predstavlja event
        e.preventDefault();
        // alert('Dodajem smjer');

        const podaci = new FormData(e.targeg);

        const dnevnik_kalorija = {
        
        potroseno_kalorija: parseFloat(podaci.get('potroseno kalorija')),
        


        };
        // console.log(smjer);
        dodaj(dnevnik_kalorija);
    


    }
    

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlID="vrsta aktivnosti">
                    <Form.Label>Vrsta aktivnosti</Form.Label>
                    <Form.Control type="text" name="Vrsta aktivnosti" required />


                 <hr />
                </Form.Group>
                <Form.Group controlID="trajanje">
                    <Form.Label>Potroseno kalorija</Form.Label>
                    <Form.Control type="number" name="potroseno kalorija"  />


                 <hr />
                </Form.Group>
                <Form.Group controlID="korisnik">
                    <Form.Label>Korisnik</Form.Label>
                    <Form.Control type="text" name="korisnik" />


                 <hr />
                </Form.Group>
                
                
               

                



                <Row>
                    <Col xs={7} sm={6} md={3} lg={6} xl={1} xxl={4}>
                        <Link className="btn btn-danger siroko" to={RoutesNames.DNEVNIK_KALORIJA_PREGLED}>
                            Odustani
                        </Link>
                    </Col>
                    <Col xs={7} sm={6} md={9} lg={6} xl={1} xxl={4}>
                        <Button className="siroko" variant="primary" type="submit">
                            Dodaj
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Container>

    );
}