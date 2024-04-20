import {httpService, obrisi} from "./HttpService"

const korisnik = '/Korisnik'

async function get(){
    return await httpService.get(korisnik)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{
        //console.log(e);
        return e;
    })
}
async function post(korisnik){
    return await httpService.post(korisnik,smjer)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
        //console.log(e);
        return {greska: true, poruka: e};
    })
}
async function _delete(sifraKorisnik){
    return await httpService.delete(korisnik + '/'+sifraKorisnik)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data.poruka};
    })
    .catch((e)=>{
        //console.log(e);
        return {greska: true, poruka: e};
    })
}

export default{
    get,
    post,
    _delete,
    obrisi
}