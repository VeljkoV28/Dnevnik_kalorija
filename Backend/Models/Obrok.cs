using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Obrok
    {
        public int? Porcija { get; set; }

        public int? Uneseno_kalorija { get; set; }

        [ForeignKey("Korisnik")]
        public required Korisnik Korisnik_ {  get; set; }
    }
}
