using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class Dnevnik_kalorijaController:ControllerBase
    {
        // Dependency injection
        // Definiraš privatno svojstvo
        private readonly EdunovaContext _context;

        // Dependency injection
        // U konstruktoru primir instancu i dodjeliš privatnom svojstvu
        public Dnevnik_kalorijaController(EdunovaContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return new JsonResult(_context.Dnevnici_kalorija.ToList());
            }
            catch (Exception ex)
            {
                return new JsonResult(ex.ToString());
            }
            
        }

        [HttpPost]
        public IActionResult Post(Dnevnik_kalorija Dnevnik_kalorija)
        {
            _context.Dnevnici_kalorija.Add(Dnevnik_kalorija);
            _context.SaveChanges();
            return new JsonResult(Dnevnik_kalorija);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        public IActionResult Put(int sifra, Dnevnik_kalorija Dnevnik_kalorija)
        {
            var smjerIzBaze = _context.Dnevnici_kalorija.Find(sifra);
            // za sada ručno, kasnije će doći Mapper
            smjerIzBaze.Vrsta_Aktivnosti = Dnevnik_kalorija.Vrsta_Aktivnosti;
            smjerIzBaze.Potroseno_kalorija= Dnevnik_kalorija.Potroseno_kalorija;
            

            _context.Dnevnici_kalorija.Update(smjerIzBaze);
            _context.SaveChanges();

            return new JsonResult(smjerIzBaze);
        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var smjerIzBaze = _context.Dnevnici_kalorija.Find(sifra);
            _context.Dnevnici_kalorija.Remove(smjerIzBaze);
            _context.SaveChanges();
            return new JsonResult(new { poruka="Obrisano"});
        }

    }
}
