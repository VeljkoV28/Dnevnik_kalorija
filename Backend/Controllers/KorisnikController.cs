using Backend.Data;
using Backend.Models;
using Backend.Mappers;
using Microsoft.AspNetCore.Mvc;




namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class KorisnikController : EdunovaController<Korisnik, KorisnikDTORead, KorisnikDTOInsertUpdate>
    {
        
        public KorisnikController(EdunovaContext context) : base(context)
        {
            DbSet = _context.Korisnici;
            _mapper = new MappingKorisnik();
        }


        protected override List<KorisnikDTORead> UcitajSve()
        {

            var lista = _context.Korisnici.ToList();

            if (lista == null || lista.Count == 0)
            {
                throw new Exception("Ne postoje podaci u bazi");
            }
            return _mapper.MapReadList(lista);




        }

        protected override Korisnik PromjeniEntitet(KorisnikDTOInsertUpdate dto, Korisnik s)
        {
            return base.PromjeniEntitet(dto, s);
        }
        protected override Korisnik NadiEntitet(int Sifra)
        {
            return base.NadiEntitet(Sifra);
        }

        protected override Korisnik KreirajEntitet(KorisnikDTOInsertUpdate dto)
        {
            return base.KreirajEntitet(dto);
        }

        protected override void KontrolaBrisanje(Korisnik entitet)
        {
            throw new NotImplementedException();
        }
    }    

} 

