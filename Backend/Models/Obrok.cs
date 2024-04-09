using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Obrok
    {
        public int? Porcija { get; set; }

        public int? Uneseno_kalorija { get; set; }

        public virtual required Korisnik Korisnik_ {  get; set; }
    }
}
