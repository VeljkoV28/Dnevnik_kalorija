import {HttpService} from "./HttpService"

const korisnik = '/Korisnik'

async function get(){
    return await HttpService.get(korisnik)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{
        //console.log(e);
        return e;
    })
}

export default{
    get
}