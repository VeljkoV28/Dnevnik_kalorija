using AutoMapper;
using Backend.Models;

namespace Backend.Mappers
{
    public class MappingObrok : Mapping<Obrok, ObrokDTORead, ObrokDTOInsertUpdate>
    {

        public MappingObrok()
        {
            MapperMapReadToDTO = new Mapper(new MapperConfiguration(c =>{
                c.CreateMap<Obrok, ObrokDTORead>()
                .ConstructUsing(entitet =>
                 new ObrokDTORead(
                    entitet.Sifra,
                    entitet.Porcija,
                    entitet.Uneseno_kalorija));
                    
            }));

            MapperMapInsertUpdatedFromDTO = new Mapper(new MapperConfiguration(c =>{
                    c.CreateMap<ObrokDTOInsertUpdate, Obrok>();
                }));

            MapperMapInsertUpdateToDTO = new Mapper(new MapperConfiguration(c =>{
                 c.CreateMap<Obrok, ObrokDTOInsertUpdate>()
                 .ConstructUsing(entitet =>
                  new ObrokDTOInsertUpdate(
                    entitet.Porcija,
                    entitet.Uneseno_kalorija,
                    entitet.Korisnik_ == null ? null : entitet.Korisnik_.Sifra));

            }));
        }



    }
}
