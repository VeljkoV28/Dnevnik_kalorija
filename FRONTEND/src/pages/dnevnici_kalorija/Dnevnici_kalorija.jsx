import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Service from '../../services/Dnevnik_kalorija';
import { IoIosAdd } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { useNavigate } from "react-router-dom";
import useError from "../../hooks/useError";



export default function Dnevnici_kalorija(){
    const [dnevici_kalorija,setDnevnici_kalorija] = useState();
    let navigate = useNavigate(); 
    const { prikaziError } = useError();

    async function dohvatiDnevnike_kalorija(){
        const odgovor = await Service.get('Dnevnik_kalorija');
        if(!odgovor.ok){
            prikaziError(odgovor.podaci);
            return;
        }
        setDnevnici_kalorija(odgovor.podaci);
    }

    async function obrisi(sifra) {
        const odgovor = await Service.obrisi('Dnevnik_kalorija',sifra);
        prikaziError(odgovor.podaci);
        if (odgovor.ok){
            dohvatiDnevnike_kalorija();
        }
    }

    useEffect(()=>{
        dohvatiDnevnike_kalorija();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    return(
        
           <Container>
            <Link to={RoutesNames.DNEVNIK_KALORIJA_NOVI} className="btn btn-success siroko">
            <IoIosAdd
                size={25}
                /> Dodaj
            </Link>
            <Table striped bordered hover responsive>
                <thead>
                        <tr>
                            <th>Vrsta aktivnosti</th>
                            <th>Potroseno kalorija</th>
                            
                            
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {dnevici_kalorija && dnevici_kalorija.map((dnevik_kalorija,index)=>(
                            <tr key={index}>
                                <td>{dnevik_kalorija.Vrsta_aktivnosti}</td>
                                <td>{dnevik_kalorija.Potroseno_kalorija}</td>
                                
                                
                                
                                <td className="sredina">
                                    <Button
                                        variant='primary'
                                        onClick={()=>{navigate(`/dnevnici_kalorija/${dnevik_kalorija.sifra}`)}}
                                    >
                                        <FaEdit 
                                    size={25}
                                    />
                                    </Button>
                               
                                
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant='danger'
                                        onClick={() => obrisi(dnevik_kalorija.sifra)}
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