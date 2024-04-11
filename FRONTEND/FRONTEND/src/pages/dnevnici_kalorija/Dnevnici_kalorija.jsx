import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Dnevnik_kalorijaService from '../../services/Dnevnik_kalorijaService';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {RoutesNames} from '../../constants'


export default function Dnevnici_kalorija(){
    const [dnevnici_kalorija, setDnevnici_kalorija] = useState();


    async function dohvatiDnevnike_kalorija(){
        await Dnevnik_kalorijaService.get()
        .then((odg)=>{
            setDnevnici_kalorija(odg);
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    useEffect(()=>{
        dohvatiDnevnike_kalorija();
    },[]);

    

    return(
        <>
           <Container>
            <Link to={RoutesNames.DNEVNIK_KALOIRJA_NOVI}> Dodaj </Link>
            <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Vrsta aktivnosti</th>
                            <th>Potroseno kalorija</th>
                            <th>korisnik</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {dnevnici_kalorija && dnevnici_kalorija.map((dnevnik_kalorija,index)=>(
                            <tr key={index}>
                                <td>{smjer.vrsta_aktivnosti}</td>
                                <td>{smjer.potroseno_kalorija}</td>
                                <td>{smjer.korisnik}</td>
                                
                            </tr>
                        ))}
                    </tbody>
            </Table>
           </Container>
        </>
    );
}