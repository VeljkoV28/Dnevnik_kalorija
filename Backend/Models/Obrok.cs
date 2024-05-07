using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Obrok : Entitet
    {
        public int? Porcija { get; set; }

        public int? Uneseno_kalorija { get; set; }

        [ForeignKey("Korisnik_")]
        public required Korisnik Korisnik_ {  get; set; }
    }
}
