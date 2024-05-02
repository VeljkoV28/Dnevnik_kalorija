using AutoMapper;
using Backend.Models;

namespace Backend.Mappers
{
    public class MappingKorisnik : Mapping<Korisnik, KorisnikDTORead,KorisnikDTOInsertUpdate>
    {

        public MappingKorisnik()
        {
            MapperMapReadToDTO = new Mapper(new MapperConfiguration(c =>{
                c.CreateMap<Korisnik, KorisnikDTORead>()
                .ConstructUsing(entitet =>
                 new KorisnikDTORead(
                    entitet.Sifra,
                    entitet.Korisnicko_ime,
                    entitet.Visina,
                    entitet.Trenutna_tezina,
                    entitet.Zeljena_tezina));
            }));

            MapperMapInsertUpdatedFromDTO = new Mapper(new MapperConfiguration(c =>{
                    c.CreateMap<KorisnikDTOInsertUpdate, Korisnik>();
                }));

            MapperMapInsertUpdateToDTO = new Mapper(new MapperConfiguration(c =>{
                 c.CreateMap<Korisnik, KorisnikDTOInsertUpdate>()
                 .ConstructUsing(entitet =>
                  new KorisnikDTOInsertUpdate(
                    entitet.Korisnicko_ime,
                    entitet.Visina,
                    entitet.Trenutna_tezina,
                    entitet.Zeljena_tezina));
                    
            }));
        }



    }
}
