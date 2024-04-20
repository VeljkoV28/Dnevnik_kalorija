import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Service from "../../services/KorisnikService";
import { IoIosAdd } from "react-icons/io";
import {  FaEdit, FaTrash} from "react-icons/fa";
import { Link } from "react-router-dom";
import {  RoutesNames } from "../../constants";
import { useNavigate } from "react-router-dom";
import useError from "../../hooks/useError";
import moment from "moment/moment";

export default function Korisnici(){
    const [korisnici,setKorisnici] = useState();
    let navigate = useNavigate(); 
    const { prikaziError } = useError();

    async function dohvatiKorisnike(){
        const odgovor = await Service.get('Korisnik');
        if(!odgovor.ok){
            prikaziError(odgovor.podaci);
            return;
        }
        setKorisnici(odgovor.podaci);
    }

    async function obrisi(sifra) {
        const odgovor = await Service.obrisi('Korisnik',sifra);
        prikaziError(odgovor.podaci);
        if (odgovor.ok){
            dohvatiKorisnike();
        }
    }

    useEffect(()=>{
        dohvatiKorisnike();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
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
                                    <Button> 
                                    onClick={()=>obrisi(korisnik.sifra)}
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
}