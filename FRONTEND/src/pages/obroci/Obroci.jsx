import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Service from '../../services/ObrokService';
import { IoIosAdd } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { useNavigate } from "react-router-dom";
import useError from "../../hooks/useError";



export default function Obroci(){
    const [obroci,setObroci] = useState();
    let navigate = useNavigate(); 
    const { prikaziError } = useError();

    async function dohvatiObroke(){
        const odgovor = await Service.get('Obrok');
        if(!odgovor.ok){
            prikaziError(odgovor.podaci);
            return;
        }
        setObroci(odgovor.podaci);
    }

    async function obrisi(sifra) {
        const odgovor = await Service.obrisi('Obrok',sifra);
        prikaziError(odgovor.podaci);
        if (odgovor.ok){
            dohvatiKorisnike();
        }
    }

    useEffect(()=>{
        dohvatiObroke();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    return(
        
           <Container>
            <Link to={RoutesNames.OBROK_NOVI} className="btn btn-success siroko">
            <IoIosAdd
                size={25}
                /> Dodaj
            </Link>
            <Table striped bordered hover responsive>
                <thead>
                        <tr>
                            <th>Porcija</th>
                            <th>Uneseno kalorija</th>
                            
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {obroci && obroci.map((obrok,index)=>(
                            <tr key={index}>
                                <td>{obrok.porcija}</td>
                                <td>{obrok.Uneseno_kalorija}</td>
                                
                                
                                
                                <td className="sredina">
                                    <Button
                                        variant='primary'
                                        onClick={()=>{navigate(`/obroci/${obrok.sifra}`)}}
                                    >
                                        <FaEdit 
                                    size={25}
                                    />
                                    </Button>
                               
                                
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant='danger'
                                        onClick={() => obrisi(obrok.sifra)}
                                    >
                                        <FaTrash
                                        size={25}/>
                                    </Button>

                                   
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );

}              