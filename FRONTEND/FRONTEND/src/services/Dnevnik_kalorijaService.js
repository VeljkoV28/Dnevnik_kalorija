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

export default{
    get
}