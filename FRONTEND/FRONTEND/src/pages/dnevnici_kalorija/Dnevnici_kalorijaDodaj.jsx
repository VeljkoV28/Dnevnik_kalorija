import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../constants";


export default function Dnevnici_kalorijaDodaj(){

    function obradiSubmit(e){ // e predstavlja event
        e.preventDefault();
        alert('Dodajem dnevnik');
    }

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>

                <Row>
                    <Col xs={6} sm={6} md={3} lg={6} xl={1} xxl={2}>
                        <Link className="btn btn-danger siroko" to={RoutesNames.DNEVNIK_KALORIJA_PREGLED}>
                            Odustani
                        </Link>
                    </Col>
                    <Col xs={6} sm={6} md={9} lg={6} xl={1} xxl={10}>
                        <Button className="siroko" variant="primary" type="submit">
                            Dodaj
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Container>

    );
}