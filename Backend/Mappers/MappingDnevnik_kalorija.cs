using AutoMapper;
using Backend.Models;

namespace Backend.Mappers
{
    public class MappingDnevnikKalorija : Mapping<Dnevnik_kalorija, Dnevnik_kalorijaDTORead,Dnevnik_kalorijaDTOInsertUpdate>
    {

        public MappingDnevnikKalorija()
        {
            MapperMapReadToDTO = new Mapper(new MapperConfiguration(c =>{
                c.CreateMap<Dnevnik_kalorija, Dnevnik_kalorijaDTORead>()
                .ConstructUsing(entitet =>
                 new Dnevnik_kalorijaDTORead(
                    entitet.Sifra,
                    entitet.Vrsta_Aktivnosti,
                    entitet.Potroseno_kalorija,
                    entitet.Korisnik_));
            }));

            MapperMapInsertUpdatedFromDTO = new Mapper(new MapperConfiguration(c =>{
                    c.CreateMap<KorisnikDTOInsertUpdate, Korisnik>();
                }));

            MapperMapInsertUpdateToDTO = new Mapper(new MapperConfiguration(c =>{
                c.CreateMap<Dnevnik_kalorija, Dnevnik_kalorijaDTOInsertUpdate>()
                .ConstructUsing(entitet =>
                 new Dnevnik_kalorijaDTOInsertUpdate(
                   entitet.Vrsta_Aktivnosti,
                   entitet.Potroseno_kalorija,
                   entitet.Korisnik_));

            }));
        }



    }
}
