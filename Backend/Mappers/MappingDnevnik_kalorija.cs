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
                    entitet.Vrsta_aktivnosti,
                    entitet.Potroseno_kalorija,
                    entitet.Uneseno_kalorija));
            }));

            MapperMapInsertUpdatedFromDTO = new Mapper(new MapperConfiguration(c =>{
                    c.CreateMap<Dnevnik_kalorijaDTOInsertUpdate, Dnevnik_kalorija>();
                }));

            MapperMapInsertUpdateToDTO = new Mapper(new MapperConfiguration(c =>{
                c.CreateMap<Dnevnik_kalorija, Dnevnik_kalorijaDTOInsertUpdate>()
                .ConstructUsing(entitet =>
                 new Dnevnik_kalorijaDTOInsertUpdate(
                   entitet.Vrsta_aktivnosti,
                   entitet.Potroseno_kalorija,
                   entitet.Uneseno_kalorija,
                   entitet.Korisnik_ == null ? null : entitet.Korisnik_.Sifra));

            }));
        }



    }
}
