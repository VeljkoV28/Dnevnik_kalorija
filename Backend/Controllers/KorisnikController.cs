using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class KorisnikController:ControllerBase
    {
        // Dependency injection
        // Definiraš privatno svojstvo
        private readonly EdunovaContext _context;

        // Dependency injection
        // U konstruktoru primir instancu i dodjeliš privatnom svojstvu
        public KorisnikController(EdunovaContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return new JsonResult(_context.Korisnici.ToList());
            }
            catch (Exception ex)
            {
                return new JsonResult(ex.ToString());
            }
            
        }

        [HttpPost]
        public IActionResult Post(Korisnik Korisnik)
        {
            _context.Korisnici.Add(Korisnik);
            _context.SaveChanges();
            return new JsonResult(Korisnik);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        public IActionResult Put(int sifra, Korisnik Korisnik)
        {
            var smjerIzBaze = _context.Korisnici.Find(sifra);
            // za sada ručno, kasnije će doći Mapper
            smjerIzBaze.Korisnicko_ime = Korisnik.Korisnicko_ime;
            smjerIzBaze.Visina= Korisnik.Visina;
            smjerIzBaze.Trenutna_tezina = Korisnik.Trenutna_tezina;
            smjerIzBaze.Zeljena_tezina = Korisnik.Zeljena_tezina;
            

            _context.Korisnici.Update(smjerIzBaze);
            _context.SaveChanges();

            return new JsonResult(smjerIzBaze);
        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var smjerIzBaze = _context.Korisnici.Find(sifra);
            _context.Korisnici.Remove(smjerIzBaze);
            _context.SaveChanges();
            return new JsonResult(new { poruka="Obrisano"});
        }

    }
}
