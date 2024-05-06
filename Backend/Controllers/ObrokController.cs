using Backend.Data;
using Backend.Mappers;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ObrokController: EdunovaController<Obrok, ObrokDTORead, ObrokDTOInsertUpdate>
    {
        public ObrokController(EdunovaContext context) : base(context)
        {
            DbSet = _context.Obroci;
            _mapper = new MappingObrok();
        }

        protected override  List<ObrokDTORead> UcitajSve()
        {

            var lista = _context.Obroci.ToList();

            if (lista == null || lista.Count == 0)
            {
                throw new Exception("Ne postoje podaci u bazi");
            }
            return _mapper.MapReadList(lista);




        }

        protected override Obrok PromjeniEntitet(ObrokDTOInsertUpdate dto, Obrok s)
        {
            return base.PromjeniEntitet(dto, s);
        }
        protected override Obrok NadiEntitet(int Sifra)
        {
            return base.NadiEntitet(Sifra);
        }

        protected override Obrok KreirajEntitet(ObrokDTOInsertUpdate dto)
        {
            return base.KreirajEntitet(dto);
        }

        protected override void KontrolaBrisanje(Obrok entitet)
        {
            throw new NotImplementedException();
        }
    


    }
}
