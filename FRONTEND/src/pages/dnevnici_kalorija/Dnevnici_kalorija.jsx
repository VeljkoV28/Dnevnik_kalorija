import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Dnevnik_kalorijaService from '../../services/Dnevnik_kalorijaService';
import {Button, Table} from 'react-bootstrap'
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

   

    }
    async function obrisiAsync(sifra){
        const odqovor =await Dnevnik_kalorijaService._delete(sifra);
        if (odqovor.greska){
            console.log((odqovor).poruka);
            alert('Pogledaj konzolu');
            return;
        }
        dohvatiDnevnike_kalorija();


    }
    
    function obrisi(sifra){
        obrisiAsync(sifra);
        


    }
    
    return(
        <>
           <Container>
            <Link to={RoutesNames.DNEVNIK_KALORIJA_NOVI}> Dodaj </Link>
            <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Vrsta aktivnosti</th>
                            <th>Potroseno kalorija</th>
                            <th>Korisnik</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {dnevnici_kalorija && dnevnici_kalorija.map((dnevnik_kalorija,index)=>(
                            <tr key={index}>
                                <td>{dnevnik_kalorijar.vrsta_aktivnosti}</td>
                                <td>{dnevnik_kalorija.potroseno_kalorija}</td>
                                <td>{smjer.cijena}</td>
                                
                                <td>
                                    <Button> onClick={()=>obrisi(dnevnik_kalorija.sifra)}
                                    variant='danger'
                                    Obrisi</Button>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
            </Table>
           </Container>
        </>
    );
