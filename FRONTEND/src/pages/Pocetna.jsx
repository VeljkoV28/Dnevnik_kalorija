import { Container } from "react-bootstrap";

function saznajVisinu(){
    return window.innerHeight - 100 + 'px';
}

export default function Pocetna(){

    return(
        <>
           <Container id='pozadina' style={{height: saznajVisinu()}}>
            Dobrodošli na aplikaciju Dnevnik kalorija
           </Container>
        </>
    );
}