import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RoutesNames } from '../constants';
import { useNavigate } from 'react-router-dom';


export default function NavBar(){

    const navigate = useNavigate();

    return(
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand 
                className='kursor'
                onClick={()=>navigate(RoutesNames.HOME)}
                >Dnevnik Kalorija</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link 
                    href="http://veljko28-001-site1.ktempurl.com/swagger/index.html"
                    target='_blank'>API</Nav.Link>
                    
                    <NavDropdown title="Dnevnik kalorija" id="collapsible-nav-dropdown">
                    <NavDropdown.Item 
                    onClick={()=>navigate(RoutesNames.DNEVNIK_KALORIJA_PREGLED)}
                    >Dnevnik kalorija</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                       Korisnik
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Predavači</NavDropdown.Item>
                
                    
                    
                    </NavDropdown>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}