import {HttpService} from "./HttpService"

const dnevnik_kalorija = '/Dnevnik kalorija'

async function get(){
    return await HttpService.get(dnevnik_kalorija)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{
        //console.log(e);
        return e;
    })
}
async function post(dnevnik_kalorija){
    return await HttpService.post(dnevnik_kalorija,smjer)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
        //console.log(e);
        return {greska: true, poruka: e};
    })
}
async function _delete(sifraDnevnika_kalorija){
    return await HttpService.delete(dnevnik_kalorija + '/'+sifraDnevnika_kalorija)
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
    _delete
}