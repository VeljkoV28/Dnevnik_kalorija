import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import KorisnikService from '../../services/KorisnikService';
import {Button, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {RoutesNames} from '../../constants'


export default function Korisnici(){
    const [korisnici, setKorisnici] = useState();


    async function dohvatiKorisnike(){
        await KorisnikService.get()
        .then((odg)=>{
            setKorisnici(odg);
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    useEffect(()=>{
        dohvatiKorisnike();
    },[]);

   

    }
    async function obrisiAsync(sifra){
        const odqovor =await KorisnikService._delete(sifra);
        if (odqovor.greska){
            console.log((odqovor).poruka);
            alert('Pogledaj konzolu');
            return;
        }
        dohvatiKorisnike();


    }
    
    function obrisi(sifra){
        obrisiAsync(sifra);
        


    }
    
    return(
        <>
           <Container>
            <Link to={RoutesNames.KORISNIK_NOVI}> Dodaj </Link>
            <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Korisniciko ime</th>
                            <th>Visina</th>
                            <th>Tezina</th>
                            <th>Zeljena tezina</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {korisnici && korisnici.map((korisnik,index)=>(
                            <tr key={index}>
                                <td>{korisnik.korisnicko_ime}</td>
                                <td>{korisnik.visina}</td>
                                <td>{korisnik.tezina}</td>
                                <td>{korisnik.zeljena_tezina}</td>
                                
                                <td>
                                    <Button> onClick={()=>obrisi(korisnik.sifra)}
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
