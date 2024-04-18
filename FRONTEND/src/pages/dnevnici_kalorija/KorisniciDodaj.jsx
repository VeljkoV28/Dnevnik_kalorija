import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import KorisnikService from "../../services/KorisnikService";


export default function KorisnicDodaj(){

    const navigate = useNavigate();

    async function dodaj(korisnik){
        const odqovor = KorisnikService.post(korisnik);
        if (odqovor.greska){
            console.log((odqovor).poruka);
            alert('Pogledaj konzolu');
            return;
        }
        navigate(RoutesNames.KORISNIK_PREGLED);


    }

    function obradiSubmit(e){ // e predstavlja event
        e.preventDefault();
        // alert('Dodajem smjer');

        const podaci = new FormData(e.targeg);

        const korisnik = {
        
        potroseno_kalorija: parseFloat(podaci.get('potroseno kalorija')),
        


        };
        // console.log(smjer);
        dodaj(korisnik);
    


    }
    

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlID="Korisnicko ime">
                    <Form.Label>Korisnicko ime</Form.Label>
                    <Form.Control type="text" name="Korisnicko ime" required />


                 <hr />
                </Form.Group>
                <Form.Group controlID="Visina">
                    <Form.Label>Visina</Form.Label>
                    <Form.Control type="number" name="Visina"  />


                 <hr />
                </Form.Group>
                <Form.Group controlID="Trenutna tezina">
                    <Form.Label>Trenutna tezina</Form.Label>
                    <Form.Control type="number" name="Trenutna tezina" />


                 <hr />
                </Form.Group>
                <Form.Group controlID="Zeljena tezina">
                    <Form.Label>Zeljena tezina</Form.Label>
                    <Form.Control type="number" name="Zeljena tezina" />


                 <hr />
                </Form.Group>
                
                
                
               

                



                <Row>
                    <Col xs={7} sm={6} md={3} lg={6} xl={1} xxl={4}>
                        <Link className="btn btn-danger siroko" to={RoutesNames.KORISNIK_PREGLED}>
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