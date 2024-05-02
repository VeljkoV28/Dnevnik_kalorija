using Backend.Data;
using Backend.Mappers;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class Dnevnik_kalorijaController:EdunovaController< Dnevnik_kalorija, Dnevnik_kalorijaDTORead, Dnevnik_kalorijaDTOInsertUpdate>
    {
        public Dnevnik_kalorijaController(EdunovaContext context) : base(context)
        {
            DbSet = _context.Dnevnici_kalorija;
            _mapper = new MappingDnevnikKalorija();
        }


        protected override List<Dnevnik_kalorijaDTORead> UcitajSve()
        {

            var lista = _context.Dnevnici_kalorija.ToList();

            if (lista == null || lista.Count == 0)
            {
                throw new Exception("Ne postoje podaci u bazi");
            }
            return _mapper.MapReadList(lista);




        }

        protected override Dnevnik_kalorija PromjeniEntitet(Dnevnik_kalorijaDTOInsertUpdate dto, Dnevnik_kalorija s)
        {
            return base.PromjeniEntitet(dto, s);
        }
        protected override Dnevnik_kalorija NadiEntitet(int Sifra)
        {
            return base.NadiEntitet(Sifra);
        }

        protected override Dnevnik_kalorija KreirajEntitet(Dnevnik_kalorijaDTOInsertUpdate dto)
        {
            return base.KreirajEntitet(dto);
        }

        protected override void KontrolaBrisanje(Dnevnik_kalorija entitet)
        {
            throw new NotImplementedException();
        }
    }

}



